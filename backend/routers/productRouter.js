import express from 'express'

//create the product route.
const ProductRoute = express.Router()

//get the controller functions
import { createProduct } from '../controllers/productController.js'
import verifyTokenAndAdmin from '../verifyToken.js'

//create a product.
ProductRoute.post('/add', verifyTokenAndAdmin, createProduct)

//export the product route.
export default ProductRoute
