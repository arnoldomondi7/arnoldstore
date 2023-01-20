import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
	const [users, setUsers] = useState(0) //default number of users is 0.
	const [products, setProducts] = useState(0) //default number of users is 0.
	const [orders, setOrders] = useState(0) //default number of users is 0.

	const [sum, setSum] = useState(0) //default value amount.

	useEffect(() => {
		const fetchData = async () => {
			const resultProducts = await axios.get(
				'/api/product/products/count-products'
			)

			// console.log(resultProducts.data)
			setProducts(resultProducts.data)

			const resultOrders = await axios.get('api/order/orders/count-orders')
			setOrders(resultOrders.data)
			// console.log(resultOrders.data)

			const resultUser = await axios.get('/api/user/count-users')
			// console.log(resultUser.data)
			setUsers(resultUser.data)

			//get the sum.

			const resultSumTotal = await axios.get('api/order/sum/get-all-sum')

			setSum(resultSumTotal.data)
			// console.log(resultSumTotal.data)
		}

		//call the function.
		fetchData()
	}, [])

	return (
		<div className='dashboard'>
			<div className='dashboard-groups'>
				<div className='dashboard-group'>
					<h4>Total Amount: </h4>
					<span className='badge'>${sum[0]?.count?.toFixed(2)}</span>
				</div>
				<div className='dashboard-group'>
					<h4>Total Users: </h4>
					<span className='badge'>{users?.count}</span>
				</div>
				<div className='dashboard-group'>
					<h4>Total Products:</h4>
					<span className='badge'>{products?.count}</span>
				</div>
				<div className='dashboard-group'>
					<h4>Total Orders:</h4>
					<span className='badge'>{orders?.count}</span>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
