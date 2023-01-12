import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { ImBin } from 'react-icons/im'
import 'react-tabs/style/react-tabs.css'
import { FaEdit, FaImage } from 'react-icons/fa'
import { AiOutlineUpload, AiTwotoneEdit } from 'react-icons/ai'
import Orders from '../components/Orders.comp'

const Account = () => {
	return (
		<div className='account'>
			<h3 className='account-title'>My Profile</h3>
			<p className='account-subtitle'>Welcome, Arnold Omondi</p>
			<Tabs>
				<TabList>
					<Tab>Info</Tab>
					<Tab>My Orders</Tab>
					<Tab>Edit Info</Tab>
					<Tab>Change Password</Tab>
					<Tab>Account Settings</Tab>
				</TabList>

				<TabPanel>
					<h3 className='account-content-title'>Info</h3>
					<div className='account-content-groups'>
						<div className='account-content-group-left'>
							<div className='account-content-group'>
								<span className='account-light'>Name:</span>
								<span className='account-bold'>Arnold Omondi</span>
							</div>

							<div className='account-content-group'>
								<span className='account-light'>Email:</span>
								<span className='account-bold'>arnoldomondi7@gmail.com</span>
							</div>

							<div className='account-content-group'>
								<span className='account-light'>Country:</span>
								<span className='account-bold'>Kenya</span>
							</div>

							<div className='account-content-group'>
								<span className='account-light'>City:</span>
								<span className='account-bold'>00200-Nairobi</span>
							</div>

							<div className='account-content-group'>
								<span className='account-light'>Address:</span>
								<span className='account-bold'>Wayaki way.</span>
							</div>

							<div className='account-content-group'>
								<span className='account-light'>Phone:</span>
								<span className='account-bold'>+254705257149</span>
							</div>
						</div>

						<div className='account-content-group-right'>
							<img src='./assets/uploads/default.png' alt='' />
						</div>
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
							<form>
								<div className='form-sign-groups'>
									<input
										type='text'
										required
										placeholder='Enter Your Name'
										value='Arnold Omondi'
									/>
									<input
										type='email'
										required
										placeholder='Enter EMail'
										value='arnoldomondi7@gmail.com'
									/>
									<input
										type='text'
										required
										placeholder='Enter Your Country'
										value='Kenya'
									/>
									<input
										type='text'
										required
										placeholder='Enter Your City'
										value='Nairobi'
									/>
									<input
										type='text'
										required
										placeholder='Enter Your Address'
										value='Wayaki way '
									/>

									<input
										type='text'
										required
										placeholder='Enter Your Phone'
										value='+254705257149'
									/>
								</div>

								<button>
									Edit Info <AiTwotoneEdit />
								</button>
							</form>
						</div>

						<div className='form-sign-div update-image'>
							<form>
								<div className='update-image'>
									<label htmlFor='image' className='label-image'>
										<FaImage />
									</label>

									<input type='file' id='image' className='user-image' />
								</div>

								<button>
									Update Image <AiOutlineUpload />
								</button>
							</form>
						</div>
					</div>
				</TabPanel>
				<TabPanel>
					<h3 className='account-content-title'>Change Password</h3>
					<div className='form-sign-div update-password'>
						<form>
							<div className='form-sign-groups'>
								<input
									type='password'
									required
									placeholder='Enter Old Password'
								/>
								<input
									type='password'
									required
									placeholder='Enter New Password'
								/>
								<input
									type='password'
									required
									placeholder='Re-Enter New Password'
								/>
							</div>

							<button>
								Update Password <FaEdit />
							</button>
						</form>
					</div>
				</TabPanel>

				<TabPanel>
					<h3 className='account-content-title'>Account Settings</h3>
					<div className='account-content-groups'>
						<p className='account-close-text'>
							You Can't Turn Back Once the Button Is Clicked
						</p>
						<button className='close-button'>
							Close Your Account <ImBin />
						</button>
					</div>
				</TabPanel>
			</Tabs>
		</div>
	)
}

export default Account
