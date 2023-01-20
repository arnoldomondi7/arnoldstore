import React, { useState } from 'react'
import UserInfo from './UserInfo.comp'

const Allusers = ({ user }) => {
	const [open, setOpen] = useState(false)

	return (
		<div className='all-users'>
			<div className='users-groups'>
				<div className='user-group'>
					<div className='user-header'>
						<img src={`./assets/uploads/${user.image}`} alt={user.name} />
					</div>
					<div className='user-body'>
						<h4 className='username'>{user.name}</h4>
					</div>
					<div className='user-footer'>
						<p className='user-info' onClick={() => setOpen(true)}>
							View All Info.
						</p>
					</div>
				</div>
			</div>
			{open && <UserInfo setOpen={setOpen} user={user} />}
		</div>
	)
}

export default Allusers
