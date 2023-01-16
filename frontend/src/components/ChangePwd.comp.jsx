import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { updatePassword } from '../redux/apiCalls.redux'

const ChangePwd = ({ user }) => {
	const [oldPassword, setOldPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [retypeNewPassword, setRetypeNewPassword] = useState('')
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(null)

	//get the user from redux store.
	//get the user fro redux.

	//handle the redux.
	const dispatch = useDispatch()

	//function to update the password.
	const onUpdatePwdHandler = async event => {
		event.preventDefault()
		try {
			if (newPassword !== retypeNewPassword) {
				return setError('Passwords Do Not Match')
			}

			updatePassword(dispatch, {
				_id: user._id,
				oldPassword,
				newPassword,
				retypeNewPassword,
			})

			setSuccess('Password, Successfully Updated.')
		} catch (error) {
			setError('Unable To Update password')
		}
	}
	return (
		<form onSubmit={onUpdatePwdHandler}>
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
			{error && <span className='form-error'>{error}</span>}
			{success && <span className='form-success'>{success}</span>}
		</form>
	)
}

export default ChangePwd
