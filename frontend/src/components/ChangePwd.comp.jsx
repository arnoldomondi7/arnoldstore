import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'

const ChangePwd = () => {
	const [oldPassword, setOldPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [retypeNewPassword, setRetypeNewPassword] = useState('')
	return (
		<form>
			<div className='form-sign-groups'>
				<input
					type='password'
					required
					placeholder='Enter Old Password'
					value={oldPassword}
					onChange={event => setOldPassword(event.target.value)}
				/>
				<input
					type='password'
					required
					placeholder='Enter New Password'
					value={newPassword}
					onChange={event => setNewPassword(event.target.value)}
				/>
				<input
					type='password'
					required
					placeholder='Re-Enter New Password'
					value={retypeNewPassword}
					onChange={event => setRetypeNewPassword(event.target.value)}
				/>
			</div>

			<button>
				Update Password <FaEdit />
			</button>
		</form>
	)
}

export default ChangePwd
