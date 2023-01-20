import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Allorders from './Allorders.comp'
import axios from 'axios'

const Orders = () => {
	//set products from the backend into the state.
	const [orders, setOrders] = useState([])

	//get the data from the database.
	//to the frontend.
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get('/api/order/allorders')

			//set the products in the setProducts.
			setOrders(data)
			//check in the log if the data is there.
			// console.log(data)

			console.log(data)
		}

		//call the function.
		fetchData()
	}, [])
	return (
		<div className='orders'>
			<Tabs>
				<TabList>
					<Tab>All Orders</Tab>
				</TabList>

				<TabPanel>
					<h3 className='account-content-title'>All Orders:</h3>

					{orders.length === 0 ? (
						<h4 className='no-products'>Currently There Are No Orders</h4>
					) : (
						<div className='d-flex'>
							{orders.map((order, i) => (
								<Allorders order={order} key={i} />
							))}
						</div>
					)}
				</TabPanel>
			</Tabs>
		</div>
	)
}

export default Orders
