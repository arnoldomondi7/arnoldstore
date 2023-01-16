import User from '../models/userModel.js'
import CryptoJS from 'crypto-js'

//controller used to update the info.
export const updateUserInfo = async (req, res) => {
	// from the body, the id === ._id
	const user = await User.findById(req.body._id)

	//handle if the user exists.
	if (user) {
		user.name = req.body.name || user.name
		user.email = req.body.email || user.email
		user.country = req.body.country || user.country
		user.city = req.body.city || user.city
		user.address = req.body.address || user.address
		user.phone = req.body.phone || user.phone

		//save the user.
		const updatedUser = await user.save()

		//send the response to the user.
		res.send({
			_id: updatedUser._id,
			username: updatedUser.name,
			email: updatedUser.email,
			country: updatedUser.country,
			city: updatedUser.city,
			address: updatedUser.address,
			phone: updatedUser.phone,
			image: updatedUser.image,
			isAdmin: updatedUser.isAdmin,
		})
	} else {
		res.status(401).send({ message: 'User Not Found.' })
	}
}

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
		} else {
			res.status(500).send('Passwords Do Not Match')
		}
	} catch (error) {
		res.status(500).send(error)
	}
}

//function to delete the account.
export const deleteAccount = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.id)

		//log message to the user.
		res.status(200).send('User Was Successfully Deleted')
	} catch (error) {
		res.status(500).send(error)
	}
}
