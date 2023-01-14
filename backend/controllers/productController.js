import Product from '../models/productModel.js'

//create a product function.
export const createProduct = async (req, res) => {
	const newProduct = new Product(req.body)

	try {
		const saveProduct = await newProduct.save()

		//send res to the user.
		res.status(201).json(saveProduct)
	} catch (error) {
		res.status(500).json(error)
	}
}

//get all products function.
export const getAllProduct = async (req, res) => {
	try {
		const getProducts = await Product.find()

		//send res to the user.
		res.status(200).send(getProducts)
	} catch (error) {
		res.status(500).send(error)
	}
}

//get a single product.
export const getSingleProduct = async (req, res) => {
	try {
		const getProduct = await Product.findOne({ _id: req.params.id })

		//send res to the user.
		res.status(200).send(getProduct)
	} catch (error) {
		res.status(404).send('Product not Found.')
	}
}
