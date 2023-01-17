import React, { useEffect } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Orders from '../components/Orders.comp'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import UserInfo from '../components/UserInfo.comp'
import ChangePwd from '../components/ChangePwd.comp'
import CloseAcc from '../components/CloseAcc.comp'
import EditInfo from '../components/EditInfo.comp'
import UpdateImage from '../components/UpdateImage.comp'

const Account = () => {
	//get the user fro redux.
	const user = useSelector(state => state.user.currentUser)

	//get the navigation hook from react-router-dom.
	const navigate = useNavigate()

	//only logged in users can access this page.
	useEffect(() => {
		!user && navigate('/')
	}, [user, navigate])
	return (
		<div className='account'>
			<h3 className='account-title'>My Profile</h3>
			<p className='account-subtitle'>Welcome, {user.name}</p>
			<Tabs>
				<TabList>
					<Tab>Info</Tab>
					<Tab>My Orders</Tab>
					<Tab>Edit Info</Tab>
					<Tab>Change Password</Tab>
					<Tab>Account Settings</Tab>
				</TabList>

				<TabPanel>
					<h3 className='account-content-title'>USER INFORMATION:</h3>
					<div className='account-content-groups'>
						<UserInfo user={user} />
					</div>
				</TabPanel>
				<TabPanel>
					<h3 className='account-content-title'>My Orders</h3>
					<div className='orders-div'>
						<Orders />
					</div>
				</TabPanel>

				<TabPanel>
					<h3 className='account-content-title'>Edit Info</h3>
					<div className='account-content-groups'>
						<div className='form-sign-div update-info'>
							<EditInfo />
						</div>

						<div className='form-sign-div update-image'>
							<UpdateImage />
						</div>
					</div>
				</TabPanel>
				<TabPanel>
					<h3 className='account-content-title'>Change Password</h3>
					<div className='form-sign-div update-password'>
						<ChangePwd user={user} />
					</div>
				</TabPanel>

				<TabPanel>
					<h3 className='account-content-title'>Account Settings</h3>
					<div className='account-content-groups'>
						<CloseAcc />
					</div>
				</TabPanel>
			</Tabs>
		</div>
	)
}

export default Account
