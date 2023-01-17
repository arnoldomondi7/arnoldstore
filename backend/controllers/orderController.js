import Order from '../models/orderModel.js'

export const orderPost = async (req, res) => {
	const newOrder = new Order(req.body)
	try {
		const saveOrder = await newOrder.save()

		//send response to the user.
		res.status(201).send(saveOrder)
	} catch (error) {
		res.status(500).send(error)
	}
}

//controller function to get user order.
export const getUserOrder = async (req, res) => {
	try {
		const orders = await Order.find({ userId: req.params.userId })

		//send the response to the users.
		res.status(200).send(orders)
	} catch (error) {
		res.status(500).send(error)
	}
}

//controller function to get my single order.
export const getMyOrder = async (req, res) => {
	const order = await Order.findById(req.params.id)

	if (order) {
		res.status(200).send(order)
	} else {
		res.status(400).send({ message: 'Order Not Found' })
	}
}
