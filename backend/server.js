import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import morgan from 'morgan'
import AuthRoutes from './routers/authRouter.js'
import UserRoutes from './routers/userRouter.js'
import ProductRoutes from './routers/productRouter.js'

//create the app server.
const app = express()
dotenv.config()

//connect to the database.
mongoose.set('strictQuery', false)
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log('App, connected to the Database')
	})
	.catch(() => {
		console.log('Unable To Connect To The Database')
	})

//handle the middlewares.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))
//upload the images.

//handle the router system.
app.use('/api/auth', AuthRoutes)
app.use('/api/product', ProductRoutes)
app.use('/api/user', UserRoutes)
//create a listening server
const port = process.env.PORT

app.listen(port, error => {
	if (error) {
		return console.log('Unable to listen to the server')
	}

	console.log(`Server is up and running on port , ${port}`)
})
