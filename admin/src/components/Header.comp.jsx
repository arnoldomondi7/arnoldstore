import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
	const admin = 'Arnold'
	const onLogoutHandler = event => {
		event.preventDefault()
	}
	return (
		<div className='header'>
			<div className='header-top'>
				<div className='header-logo'>
					<NavLink to='/' className='header-logo-link'>
						<h2 className='header-logo-title'>ArnoldStore</h2>
						<h4 className='header-logo-title'>Online Marketplace</h4>
					</NavLink>
				</div>
				<div className='header-top-links'>
					{admin && (
						<>
							<img src='' alt='' />
							<span className='header-logout' onClick={onLogoutHandler}>
								Logout
							</span>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default Header
