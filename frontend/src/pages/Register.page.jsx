import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
	// handle navigate createHook.
	const navigate = useNavigate()

	//get the logged in user.
	const user = useSelector(state => state.user.currentUser)

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
						<input type='text' required placeholder='Enter Full Name' />
						<input type='email' required placeholder='Enter Email' />
						<input type='password' required placeholder='Enter Password' />
						<input type='password' required placeholder='Confirm Password' />
					</div>

					<button>Register</button>
					<p>
						Alredy Have An Account ? <Link to='/login'> Login</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

export default Register
