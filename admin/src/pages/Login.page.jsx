import React from 'react'
import { useState } from 'react'

const Login = () => {
	//get the logged in user.
	const admin = 'Arnold'

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	//function to login the user.
	const onLoginHandler = async event => {
		event.preventDefault()
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

					<button onClick={onLoginHandler}>Login</button>
				</form>
			</div>
		</div>
	)
}

export default Login
