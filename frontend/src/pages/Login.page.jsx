import React, { useEffect, useState } from 'react'
import { BsFillUnlockFill } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
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

	//ensure the logged in users dont access this page.
	useEffect(() => {
		user && navigate('/')
	}, [navigate, user])
	return (
		<div className='form-sign'>
			<div className='form-sign-div'>
				<form>
					<h3 className='form-sign-title'>Login </h3>
					<div className='form-sign-groups'>
						<input
							type='email'
							required
							placeholder='Enter Email'
							value={email}
							onChange={event => setEmail(event.target.value)}
						/>
						<input
							type='password'
							required
							placeholder='Enter Password'
							value={password}
							onChange={event => setPassword(event.target.value)}
						/>
					</div>

					<button disabled={isFetching} onClick={onLoginHandler}>
						Login <BsFillUnlockFill />
					</button>

					{/* handle the errors */}
					{error && (
						<span className='form-error'>
							Invalid Credentials, Please Try Again
						</span>
					)}
					<p>
						New Here ? <Link to='/register'> Register</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

export default Login
