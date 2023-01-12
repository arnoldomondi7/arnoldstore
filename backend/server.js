import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import dotenv from 'dotenv'

//set up the express
const app = express()
dotenv.config()

//make use of the middlewares.
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
app.use(compression())

//upload images.

//handle the routes.
app.get('/', async (req, res) => {
	res.send('Hello world from nodejs')
})
//connect to the database.
mongoose.set('strictQuery', false)
mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log('Successfully, Connected to the db')
	})
	.catch(() => {
		console.log('Unable to connect, to the db.')
	})

//generate the app server.
const port = process.env.PORT || 5000

//listen to the server.
app.listen(port, error => {
	if (error) {
		return console.log('Cant Listen to Server because of', error)
	}

	console.log(`Server is Listening to port -->${port}`)
})
