import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Allusers from './Allusers.comp'
import axios from 'axios'

const Users = () => {
	//set products from the backend into the state.
	const [users, setUsers] = useState([])

	//get the data from the database.
	//to the frontend.
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get('/api/user/all-users')

			//set the products in the setProducts.
			setUsers(data)
			//check in the log if the data is there.
			// console.log(data)
		}

		//call the function.
		fetchData()
	}, [])
	return (
		<div className='users'>
			<Tabs>
				<TabList>
					<Tab>All Users</Tab>
				</TabList>

				<TabPanel>
					<h3 className='account-content-title'>All Users:</h3>
					{users.length === 0 ? (
						<h4 className='no-products'>Currently There Are No Users</h4>
					) : (
						<div className='d-flex'>
							{users.map((user, i) => (
								<Allusers user={user} key={i} />
							))}
						</div>
					)}
				</TabPanel>
			</Tabs>
		</div>
	)
}

export default Users
