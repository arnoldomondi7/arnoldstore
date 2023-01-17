import React, { useEffect } from 'react'
import CartItems from '../components/CartItems.comp'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const Cart = () => {
	//get the user fro redux.
	const user = useSelector(state => state.user.currentUser)

	//get the navigation hook from react-router-dom.
	const navigate = useNavigate()

	//only logged in users can access this page.
	useEffect(() => {
		!user && navigate('/')
	}, [user, navigate])
	return (
		<div className='cart'>
			<CartItems />
		</div>
	)
}

export default Cart
