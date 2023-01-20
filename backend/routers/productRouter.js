import express from 'express'

//create the product route.
const ProductRoutes = express.Router()

//get the controller functions
import {
	countAllProducts,
	createProduct,
	getAllProduct,
	getSingleProduct,
	updateImages,
	updateProduct,
} from '../controllers/productController.js'
import verifyTokenAndAdmin from '../verifyToken.js'

//create a product.
ProductRoutes.post('/add', verifyTokenAndAdmin, createProduct)

//get all the products.
ProductRoutes.get('/all', getAllProduct)

//get a single products.
ProductRoutes.get('/:id', getSingleProduct)

//get the number of all the products in the application.
ProductRoutes.get('/products/count-products', countAllProducts)

//update the product info.
ProductRoutes.put('/update-product', updateProduct)

//update product image route.
ProductRoutes.put('/update/:id', updateImages)

//export the product route.
export default ProductRoutes
