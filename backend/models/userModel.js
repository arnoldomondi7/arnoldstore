import mongoose from 'mongoose'
const { Schema, model } = mongoose

//create the table for the user.
const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			max: 50,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			min: [8, 'Password Should be At Least 8 Characters Long'],
		},
		country: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			required: true,
		},
		address: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
			required: true,
		},
	},
	{ timestamps: true }
)

const User = model('User', UserSchema)

export default User
