import Product from '../models/productModel.js'

//create products.
export const createProduct = async (req, res) => {
	//get the details from the fronend via req.body.
	const newProduct = new Product(req.body)

	//when dealing with the db, use trycatch
	try {
		const savedProduct = await newProduct.save()

		//send the res to the frontend.
		res.status(201).json(savedProduct)
	} catch (error) {
		res.status(400).json(error)
	}
}
