import Product from '../models/productModel.js'

//create a product function.
export const createProduct = async (req, res) => {
	const newProduct = new Product(req.body)

	try {
		const saveProduct = await newProduct.save()

		//send res to the user.
		res.status(200).json(saveProduct)
	} catch (error) {
		res.status(500).json(error)
	}
}
