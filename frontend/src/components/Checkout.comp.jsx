import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const Checkout = ({ setOpen }) => {
	const user = useSelector(state => state.user.currentUser)
	return (
		<div className='checkout-container'>
			<div className='checkout-wrapper'>
				<h4 className='close-checkout' onClick={() => setOpen(false)}>
					<AiFillCloseCircle />
				</h4>

				<h3 className='checkout-title'>Payment On Delivery</h3>

				<div className='checkout-groups'>
					<div className='checkout-group'>
						<input type='text' placeholder='Enter Name' />
					</div>

					<div className='checkout-group'>
						<input type='email' placeholder='Enter email' />
					</div>

					<div className='checkout-group'>
						<input type='text' placeholder='Enter Country' />
					</div>

					<div className='checkout-group'>
						<input type='text' placeholder='Enter City' />
					</div>

					<div className='checkout-group'>
						<input type='text' placeholder='Enter Address' />
					</div>

					<div className='checkout-group'>
						<input type='text' placeholder='Enter Phone' />
					</div>

					<div className='checkout-group'>
						<button className='order-now'>Order Now</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Checkout
