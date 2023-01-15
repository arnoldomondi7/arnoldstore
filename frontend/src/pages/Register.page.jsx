import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
	// handle navigate createHook.
	const navigate = useNavigate()

	//get the state from redux
	const user = useSelector(state => state.user.currentUser)

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [retypePassword, setRetypePassword] = useState('')
	const [error, setError] = useState(null)

	//handle user registration.
	const onRegisterHandler = async event => {
		event.preventDefault()

		//ensure the password is the same as the retyped password.
		if (password !== retypePassword) {
			return setError('Passwords Do Not Match, Please Try Again.')
		}

		//ensure the passwords is at least 8 characters.
		if (password.length < 8) {
			return setError('Passwords Should Be Atleast 8 Characters Long')
		}

		try {
			const { data } = axios.post('/api/auth/register', {
				name,
				email,
				password,
			})

			//handle all error
			if (data.error) {
				return setError(data.error)
			}

			//redirect the user to the login page.
			navigate('/login')
		} catch (error) {
			setError('Email Already In User Pick Anotherone.')
		}
	}

	//ensure the logged in users dont access this page.
	useEffect(() => {
		user && navigate('/')
	}, [navigate, user])
	return (
		<div className='form-sign'>
			<div className='form-sign-div'>
				<form>
					<h3 className='form-sign-title'>Register </h3>
					<div className='form-sign-groups'>
						<input
							type='text'
							required
							placeholder='Enter Full Name'
							value={name}
							onChange={event => setName(event.target.value)}
						/>
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
						<input
							type='password'
							required
							placeholder='Confirm Password'
							value={retypePassword}
							onChange={event => setRetypePassword(event.target.value)}
						/>
					</div>

					<button onClick={onRegisterHandler}>Register</button>
					{error && <span className='form-error '>{error}</span>}
					<p>
						Alredy Have An Account ? <Link to='/login'> Login</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

export default Register
