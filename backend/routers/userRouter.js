import express from 'express'

const UserRoutes = express.Router()

//controller function to update the password.
import { updatePassword } from '../controllers/userController.js'

//update the users password.
UserRoutes.put('/update-password', updatePassword)

export default UserRoutes
