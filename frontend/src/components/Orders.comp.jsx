import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Orders = () => {
	const user = useSelector(state => state.user.currentUser)
	const userId = user._id
	//place the state to hold the orders.
	const [orders, setOrders] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`/api/order/find/${userId}`)
			setOrders(data)

			// console.log(data)
		}

		fetchData()
	}, [userId])
	return (
		<div className='order'>
			{orders.length === 0 ? (
				<h4 className='no-products'>Make Orders To See The Listed</h4>
			) : (
				orders.map((order, i) => (
					<h4 className='orders-id' key={i}>
						Order Id:{order._id}
						<Link to={`/orders/${order._id}`}>
							<FaEye />
						</Link>
					</h4>
				))
			)}
		</div>
	)
}

export default Orders
