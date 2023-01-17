import express from 'express'

const UserRoutes = express.Router()

//controller function to update the password.
import {
	deleteAccount,
	updateImage,
	updatePassword,
	updateUserInfo,
} from '../controllers/userController.js'

//update the users password.
UserRoutes.put('/update-password', updatePassword)

//update the users data.
UserRoutes.put('/update-info', updateUserInfo)

//delete the user.
UserRoutes.delete('/:id', deleteAccount)

//update the image route.
UserRoutes.put('/update/:id', updateImage)
export default UserRoutes
