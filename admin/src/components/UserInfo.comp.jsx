import React from 'react'

const UserInfo = ({ setOpen, user }) => {
	return (
		<div className='product-info-container'>
			<div className='product-info-wrapper'>
				<h4 className='close-product-info' onClick={() => setOpen(false)}>
					Close
				</h4>

				<h3 className='product-info-title'>User Infomation</h3>

				<div className='product-info-groups'>
					<div className='product-info-flex'>
						<div className='product-info-group'>
							<p className='user-title'>
								Username: <span>{user.name}</span>
							</p>
						</div>

						<div className='product-info-group'>
							<p className='user-title'>
								Email: <span>{user.email}</span>
							</p>
						</div>

						<div className='product-info-group'>
							<p className='user-title'>
								Country: <span>{user.country}</span>
							</p>
						</div>

						<div className='product-info-group'>
							<p className='user-title'>
								City: <span>{user.city}</span>
							</p>
						</div>

						<div className='product-info-group'>
							<p className='user-title'>
								Address: <span>{user.address}</span>
							</p>
						</div>

						<div className='product-info-group'>
							<p className='user-title'>
								Phone: <span>{user.phone}</span>
							</p>
						</div>
					</div>

					<div className='product-info-flex'>
						<div className='product-info-group user-image'>
							<span> User Image</span>
							<img src={`./assets/uploads/${user.image}`} alt={user.name} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserInfo
