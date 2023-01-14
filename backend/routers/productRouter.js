import express from 'express'

//create the product route.
const ProductRoute = express.Router()

//get the controller functions
import {
	createProduct,
	getAllProduct,
	getSingleProduct,
} from '../controllers/productController.js'
import verifyTokenAndAdmin from '../verifyToken.js'

//create a product.
ProductRoute.post('/add', verifyTokenAndAdmin, createProduct)

//get all the products.
ProductRoute.get('/all', getAllProduct)

//get a single products.
ProductRoute.get('/:id', getSingleProduct)

//export the product route.
export default ProductRoute
