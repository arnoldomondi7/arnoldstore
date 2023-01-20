import React from 'react'
import Header from '../components/Header.comp'
import Footer from '../components/Footer.comp'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Dashboard from '../components/Dashboard.comp'
import Products from '../components/Products.comp'
import { useSelector } from 'react-redux'
import Users from '../components/Users.comp'
import Orders from '../components/Orders.comp'

const Home = () => {
	const user = useSelector(state => state.user.currentUser)
	return (
		<>
			<Header />
			<main className='main-container'>
				<div className='account'>
					<h3 className='account-title'>Admin Panel</h3>
					<p className='account-subtitle'>Admin: {user.name}</p>
					<Tabs>
						<TabList>
							<Tab>Dashboard</Tab>
							<Tab>Products</Tab>
							<Tab>Users</Tab>
							<Tab>Orders</Tab>
						</TabList>

						<TabPanel>
							<h3 className='account-content-title'>Admin Dashboard:</h3>
							<Dashboard />
						</TabPanel>
						<TabPanel>
							<h3 className='account-content-title'>Products</h3>
							<Products />
						</TabPanel>

						<TabPanel>
							<h3 className='account-content-title'>Users</h3>
							<Users />
						</TabPanel>
						<TabPanel>
							<h3 className='account-content-title'>Orders</h3>
							<Orders />
						</TabPanel>
					</Tabs>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default Home
