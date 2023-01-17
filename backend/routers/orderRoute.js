import express from 'express'

const OrderRoute = express.Router()

//controller function to create the orders.
import {
	getMyOrder,
	getUserOrder,
	orderPost,
} from '../controllers/orderController.js'

//create orders
OrderRoute.post('/add', orderPost)

//get the user orders.
OrderRoute.get('/find/:userId', getUserOrder)

//get my order.
OrderRoute.get('/:id', getMyOrder)

//export the OrderRoute.
export default OrderRoute
