import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

const Account = () => {
	return (
		<div className='account'>
			<h3 className='account-title'>My Profile</h3>
			<p className='account-subtitle'>Welcome, Arnold Omondi</p>
			<Tabs>
				<TabList>
					<Tab>Info</Tab>
					<Tab>My Orders</Tab>
					<Tab>Change Info</Tab>
					<Tab>Change Password</Tab>
				</TabList>

				<TabPanel>
					<h3 className='account-content-title'>Info</h3>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>

				<TabPanel>
					<h2>Any content 3</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 4</h2>
				</TabPanel>
			</Tabs>
		</div>
	)
}

export default Account
