import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
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
