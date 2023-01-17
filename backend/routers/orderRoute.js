import express from 'express'

const OrderRoute = express.Router()

//controller function to create the orders.
import { orderPost } from '../controllers/orderController.js'

OrderRoute.post('/add', orderPost)

//export the OrderRoute.
export default OrderRoute
