import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAccount } from '../redux/apiCalls.redux'

const DeleteAcc = ({ setOpen }) => {
	const user = useSelector(state => state.user.currentUser)

	//get the params.
	const userId = user?._id

	const dispatch = useDispatch()
	const [error, setError] = useState(null)
	//function to delete the account.
	const onAccountDeleteHandler = event => {
		event.preventDefault()

		try {
			deleteAccount(dispatch, userId)
		} catch (error) {
			setError('Account, Unable To Delete')
		}
	}
	return (
		<>
			<div className='delete-container'>
				<div className='delete-model'>
					<div className='delete-top'>
						<h4 className='delete-title'>
							Are You Sure You Want To Delete Your Account?
						</h4>
					</div>

					<div className='delete-bottom'>
						<button className='delete-btn-no' onClick={() => setOpen(false)}>
							No
						</button>
						<button className='delete-btn-yes' onClick={onAccountDeleteHandler}>
							Yes
						</button>
					</div>
				</div>
			</div>
			{error && <span className='form-error'>{error}</span>}
		</>
	)
}

export default DeleteAcc
