import express from 'express'
import { loginUser, registerUser } from '../controllers/authController.js'

const AuthRoutes = express.Router()
//register user
AuthRoutes.post('/register', registerUser)
//login user
AuthRoutes.post('/login', loginUser)

export default AuthRoutes
