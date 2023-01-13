import mongoose from 'mongoose'

//create the user table.
const UserSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		country: { type: String, required: true },
		city: { type: String, required: true },
		address: { type: String, required: true },
		phone: { type: String, required: true },
		image: { type: String, required: true },
		isAdmin: { type: Boolean, required: true, default: false },
	},
	{ timestamps: true }
)

const User = mongoose.model('User', UserSchema)

export default User
