import express from 'express'

const OrderRoute = express.Router()

//controller function to create the orders.
import {
	countAllOrders,
	getAllOrders,
	getAllSum,
	getMyOrder,
	getUserOrder,
	orderPost,
} from '../controllers/orderController.js'

//create orders
OrderRoute.post('/add', orderPost)

//get all orders by the admin.
OrderRoute.get('/allorders', getAllOrders)

//get the user orders.
OrderRoute.get('/find/:userId', getUserOrder)

//get my order.
OrderRoute.get('/:id', getMyOrder)

//get the number of all the orders in the application.
OrderRoute.get('/orders/count-orders', countAllOrders)

//get the total sum for the products.
OrderRoute.get('/sum/get-all-sum', getAllSum)

//export the OrderRoute.
export default OrderRoute
