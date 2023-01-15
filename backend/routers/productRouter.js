import express from 'express'

//create the product route.
const ProductRoutes = express.Router()

//get the controller functions
import {
	createProduct,
	getAllProduct,
	getSingleProduct,
} from '../controllers/productController.js'
import verifyTokenAndAdmin from '../verifyToken.js'

//create a product.
ProductRoutes.post('/add', verifyTokenAndAdmin, createProduct)

//get all the products.
ProductRoutes.get('/all', getAllProduct)

//get a single products.
ProductRoutes.get('/:id', getSingleProduct)

//export the product route.
export default ProductRoutes
