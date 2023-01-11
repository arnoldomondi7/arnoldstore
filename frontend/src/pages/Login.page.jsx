import React from 'react'

const Login = () => {
	return (
		<div className='form-sign'>
			<div className='form-sign-div'>
				<form>
					<h3 className='form-sign-title'>Login </h3>
					<div className='form-sign-groups'>
						<input type='email' required placeholder='Enter Email' />
						<input type='password' required placeholder='Enter Password' />
					</div>

					<button>Login</button>
				</form>
			</div>
		</div>
	)
}

export default Login
