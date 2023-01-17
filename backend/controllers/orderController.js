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
