import React, { useState } from 'react'
import { AiTwotoneEdit } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { updateInfo } from '../redux/apiCalls.redux'

const EditInfo = () => {
	//getting the user data from the redux store.
	const user = useSelector(state => state.user.currentUser)

	const dispatch = useDispatch()

	const [name, setName] = useState(user.name)
	const [email, setEmail] = useState(user.email)
	const [country, setCountry] = useState(user.country)
	const [city, setCity] = useState(user.city)
	const [address, setAddress] = useState(user.address)
	const [phone, setPhone] = useState(user.phone)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(null)

	//function to update the user info.
	const onUpdateInfoHandler = event => {
		event.preventDefault()
		try {
			updateInfo(dispatch, {
				_id: user._id,
				name,
				email,
				country,
				city,
				address,
				phone,
			})

			setSuccess('Account Was Successfully Updated.')
		} catch (error) {
			setError('Account Info Failed To Update.')
		}
	}
	return (
		<form onSubmit={onUpdateInfoHandler}>
			<div className='form-sign-groups'>
				<label>Enter Name</label>
				<input
					type='text'
					placeholder='Enter Your Name'
					defaultValue={name}
					onChange={event => setName(event.target.value)}
				/>
				<label>Enter Email</label>
				<input
					type='email'
					placeholder='Enter EMail'
					defaultValue={email}
					onChange={event => setEmail(event.target.value)}
				/>
				<label>Enter Country</label>
				<input
					type='text'
					placeholder='Enter Your Country'
					defaultValue={country}
					onChange={event => setCountry(event.target.value)}
				/>

				<label>Enter City</label>
				<input
					type='text'
					placeholder='Enter Your City'
					defaultValue={city}
					onChange={event => setCity(event.target.value)}
				/>

				<label>Enter Address</label>
				<input
					type='text'
					placeholder='Enter Your Address'
					defaultValue={address}
					onChange={event => setAddress(event.target.value)}
				/>
				<label>Enter Phone</label>
				<input
					type='text'
					placeholder='Enter Your Phone'
					defaultValue={phone}
					onChange={event => setPhone(event.target.value)}
				/>
			</div>

			<button>
				Update Info <AiTwotoneEdit />
			</button>
			{error && <span className='form-error'>{error}</span>}
			{success && <span className='form-success'>{success}</span>}
		</form>
	)
}

export default EditInfo
