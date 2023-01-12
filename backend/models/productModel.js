import mongoose from 'mongoose'
const { Schema, model } = mongoose

//create the table for the Product.
const ProductSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			max: 50,
		},
		description: {
			type: String,
			required: true,
			min: 5,
			max: 70,
		},
		category: {
			type: String,
			required: true,
			max: 50,
		},
		price: {
			type: Number,
			required: true,
			max: 50,
		},
		star: {
			type: Number,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		imageOne: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
)

const Product = model('Product', ProductSchema)

export default Product
