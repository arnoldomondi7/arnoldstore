import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/apiCalls.redux'

const Login = () => {
	//get the logged in user.
	const user = useSelector(state => state.user.currentUser)

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	// handle navigate createHook.
	const navigate = useNavigate()

	const dispatch = useDispatch()
	const { isFetching, error } = useSelector(state => state.user)

	//function to login the user.
	const onLoginHandler = async event => {
		event.preventDefault()

		login(dispatch, { email, password })
	}

	return (
		<div className='form-sign'>
			<div className='form-sign-div'>
				<form>
					<h3 className='form-sign-title'>
						Arnoldstore <br /> Admin Panel Login{' '}
					</h3>
					<div className='form-sign-groups'>
						<input
							type='email'
							required
							placeholder='Admin Email'
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
						<input
							type='password'
							required
							placeholder='Admin Password'
							value={password}
							onChange={event => setPassword(event.target.value)}
						/>
					</div>
					<button disabled={isFetching} onClick={onLoginHandler}>
						Login
					</button>
					{error && (
						<span className='form-error'> Wrong Username or Password</span>
					)}
				</form>
			</div>
		</div>
	)
}

export default Login
