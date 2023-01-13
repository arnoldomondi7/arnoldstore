import User from '../models/userModel.js'
import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'

//register user
export const registerUser = async (req, res) => {
	try {
		//validations.
		const match = await User.findOne({ email: req.body.email })

		//handle error if email exists.
		if (match) {
			return res.status(400).json('User Already Exist Pick A New Email')
		}

		//save the new user
		const newUser = new User({
			name: req.body.name,
			email: req.body.email,

			//encrypt password
			password: CryptoJS.AES.encrypt(
				req.body.password,
				process.env.PASSWORD_SECRET
			).toString(),
			country: req.body.country || 'Not Added',
			city: req.body.city || 'Not Added',
			address: req.body.address || 'Not Added',
			phone: req.body.phone || 'Not Added',
			image: req.body.image || 'default.png',
		})

		//save the user.
		const saveUser = await newUser.save()

		//send the res back to the user.
		res.status(201).send(saveUser)
	} catch (error) {
		res.status(500).send(error)
	}
}

//login user
export const loginUser = async (req, res) => {
	try {
		//ensure that the user exists.
		const user = await User.findOne({ email: req.body.email })

		if (!user) {
			return res
				.status(401)
				.send('Invalid Credentials, Either Try Again or Create New User')
		}

		//compare the hashed password.
		const hashedPassword = CryptoJS.AES.decrypt(
			user.password,
			process.env.PASSWORD_SECRET
		)

		const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

		// compare the password with the hashed password
		if (originalPassword !== req.body.password) {
			return res.status(401).send('Ivalid Credentials')
		}

		//generate the token.
		const authToken = jwt.sign(
			{
				_id: user._id,
				isAdmin: user.isAdmin,
			},
			process.env.JWT_SECRET,
			{ expiresIn: '3d' }
		)

		const { password, ...others } = user._doc //send everything except password.

		//send the res to the user.
		res.status(201).send({ ...others, authToken })
	} catch (error) {
		res.status(500).send(error)
	}
}
