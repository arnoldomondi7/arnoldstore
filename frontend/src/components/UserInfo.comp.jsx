import React from 'react'

const UserInfo = ({ user }) => {
	return (
		<>
			<div className='account-content-group-left'>
				<div className='account-content-group'>
					<span className='account-light'>Name:</span>
					<span className='account-bold'>{user.name}</span>
				</div>

				<div className='account-content-group'>
					<span className='account-light'>Email:</span>
					<span className='account-bold'>{user.email}</span>
				</div>

				<div className='account-content-group'>
					<span className='account-light'>Country:</span>
					<div className='account-bold'>{user.country}</div>
				</div>

				<div className='account-content-group'>
					<span className='account-light'>City:</span>
					<span className='account-bold'>{user.city}</span>
				</div>

				<div className='account-content-group'>
					<span className='account-light'>Address:</span>
					<span className='account-bold'>{user.address}</span>
				</div>

				<div className='account-content-group'>
					<span className='account-light'>Phone:</span>
					<span className='account-bold'>{user.phone}</span>
				</div>
			</div>

			<div className='account-content-group-right'>
				<img src={`./assets/uploads/${user.image}`} alt={user.name} />
			</div>
		</>
	)
}

export default UserInfo
