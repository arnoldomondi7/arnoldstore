import User from '../models/userModel.js'
import CryptoJS from 'crypto-js'

//controller dfunction to update the password.
export const updatePassword = async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate({ _id: req.body._id })

		!user && res.status(401).send('Wrong Credentials')

		//hash the password.
		const hashedPassword = CryptoJS.AES.decrypt(
			user.password,
			process.env.PASSWORD_SECRET
		)

		const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

		// compare the password with the hashed password
		if (originalPassword !== req.body.oldPassword) {
			return res.status(401).send('The Old Password Is Invalid')
		}

		//ensure that the newpassword is same as the retyped password

		if (req.body.newPassword === req.body.retypeNewPassword) {
			//hash the password.
			user.password = CryptoJS.AES.encrypt(
				req.body.newPassword,
				process.env.PASSWORD_SECRET
			).toString()

			// save the new password.
			await user.save()
			//send response to the user.
			res.status(201).send('Password, Was Successfully Changed.')
		}

		res.status(500).send('Passwords Do Not Match')
	} catch (error) {
		res.status(500).send('')
	}
}
