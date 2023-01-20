import React from 'react'
import { NavLink } from 'react-router-dom'
import { logout } from '../redux/apiCalls.redux'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const user = useSelector(state => state.user.currentUser)

	const dispatch = useDispatch()

	const navigate = useNavigate()

	const onLogoutHandler = event => {
		event.preventDefault()
		logout(dispatch)
	}

	useEffect(() => {
		!user && navigate('/login')
	}, [user, navigate])

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
					<span className='header-logout' onClick={onLogoutHandler}>
						Logout
					</span>
				</div>
			</div>
		</div>
	)
}

export default Header
