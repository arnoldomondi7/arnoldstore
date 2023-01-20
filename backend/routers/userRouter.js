import express from 'express'

const UserRoutes = express.Router()

//controller function to update the password.
import {
	getAllUsers,
	deleteAccount,
	updateImage,
	updatePassword,
	updateUserInfo,
	countAllUsers,
} from '../controllers/userController.js'

//get all users to the admin.
UserRoutes.get('/all-users', getAllUsers)

//update the users password.
UserRoutes.put('/update-password', updatePassword)

//update the users data.
UserRoutes.put('/update-info', updateUserInfo)

//delete the user.
UserRoutes.delete('/:id', deleteAccount)

//update the image route.
UserRoutes.put('/update/:id', updateImage)

//get the number of all the users in the application.
UserRoutes.get('/count-users', countAllUsers)

export default UserRoutes
