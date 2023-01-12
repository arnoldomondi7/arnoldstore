import express from 'express'

//get the controller FUnction.
import { createProduct } from '../controllers/productController.js'
const ProductRoute = express.Router()

//handle the crud operations.
//create products.
//only the admin can add products.
ProductRoute.post('/add', createProduct)

//export the route.
export default ProductRoute
