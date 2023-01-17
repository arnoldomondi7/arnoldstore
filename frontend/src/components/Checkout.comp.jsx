import axios from 'axios'
import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllFromCart } from '../redux/apiCalls.redux'

const Checkout = ({ setOpen, finishedPrice }) => {
	const user = useSelector(state => state.user.currentUser)
	const cart = useSelector(state => state.cart)

	const [name, setName] = useState(user.name)
	const [email, setEmail] = useState(user.email)
	const [country, setCountry] = useState(user.country)
	const [city, setCity] = useState(user.city)
	const [address, setAddress] = useState(user.address)
	const [phone, setPhone] = useState(user.phone)
	const [error, seteError] = useState(null)

	const dispatch = useDispatch()

	//get the orders to the frontend.
	const orderProductsNow = async () => {
		const fetchData = async () => {
			try {
				const result = await axios.post('/api/order/add', {
					userId: user._id,
					fullName: name,
					email: email,
					country: country,
					city: city,
					address: address,
					phone: phone,
					products: cart,
					total: finishedPrice,
				})

				//clear the cart once the order had been made.
				if (result) {
					deleteAllFromCart(dispatch)
					setOpen(false)
				}
			} catch (error) {
				seteError('Error Occured When Creating An Order!!')
			}
		}

		fetchData()
	}
	return (
		<div className='checkout-container'>
			<div className='checkout-wrapper'>
				<h4 className='close-checkout' onClick={() => setOpen(false)}>
					<AiFillCloseCircle />
				</h4>

				<h3 className='checkout-title'>Payment On Delivery</h3>

				<div className='checkout-groups'>
					<div className='checkout-group'>
						<input
							defaultValue={name}
							type='text'
							placeholder='Enter Name'
							onChange={event => setName(event.target.value)}
							required
						/>
					</div>

					<div className='checkout-group'>
						<input
							defaultValue={email}
							type='email'
							placeholder='Enter email'
							onChange={event => setEmail(event.target.value)}
							required
						/>
					</div>

					<div className='checkout-group'>
						<input
							defaultValue={country}
							type='text'
							placeholder='Enter Country'
							onChange={event => setCountry(event.target.value)}
							required
						/>
					</div>

					<div className='checkout-group'>
						<input
							defaultValue={city}
							type='text'
							placeholder='Enter City'
							onChange={event => setCity(event.target.value)}
							required
						/>
					</div>

					<div className='checkout-group'>
						<input
							defaultValue={address}
							type='text'
							placeholder='Enter Address'
							onChange={event => setAddress(event.target.value)}
							required
						/>
					</div>

					<div className='checkout-group'>
						<input
							defaultValue={phone}
							type='text'
							placeholder='Enter Phone'
							onChange={event => setPhone(event.target.value)}
							required
						/>
					</div>

					<div className='checkout-group'>
						<button className='order-now' onClick={orderProductsNow}>
							Order Now
						</button>
					</div>
					{error && <span className='form-error'>{error}</span>}
				</div>
			</div>
		</div>
	)
}

export default Checkout
