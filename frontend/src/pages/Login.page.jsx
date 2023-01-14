import React, { useState } from 'react'
import { BsFillUnlockFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	//function to login the user.
	const onLoginHandler = async () => {}
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

					<button onClick={onLoginHandler}>
						Login <BsFillUnlockFill />
					</button>
					<p>
						New Here ? <Link to='/register'> Register</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

export default Login
