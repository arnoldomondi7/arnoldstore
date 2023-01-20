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

//function to count all the users.
export const countAllProducts = async (req, res) => {
	try {
		const countProducts = await Product.countDocuments()

		//send the response to the user.
		res.status(200).send({ count: countProducts })
	} catch (error) {
		res.status(500).send(error)
	}
}

//controller used to update product the info.
export const updateProduct = async (req, res) => {
	// from the body, the id === ._id
	const product = await Product.findById(req.body._id)

	//handle if the user exists.
	if (product) {
		product.name = req.body.name || product.name
		product.category = req.body.category || product.category
		product.price = req.body.price || product.price
		product.star = req.body.star || product.star
		product.description = req.body.description || product.description

		//save the user.
		const updatedProduct = await product.save()

		//send the response to the user.
		res.send({
			_id: updatedProduct._id,
			name: updatedProduct.name,
			category: updatedProduct.category,
			price: updatedProduct.price,
			star: updatedProduct.star,
			description: updatedProduct.description,
		})
	} else {
		res.status(401).send({ message: 'Product Not Found.' })
	}
}

//controller function to product update the image.
export const updateImages = async (req, res) => {
	if (req.body.productId === req.params.id) {
		try {
			await Product.findByIdAndUpdate(req.params.id, {
				$set: req.body,
			})
			res.status(200).send('Image Successfully Updated')
		} catch (error) {
			return res.status(500).send(error)
		}
	} else {
		return res.status(403).send('Error!! Your Account')
	}
}
