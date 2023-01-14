import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	//get the logged in user.
	const user = useSelector(state => state.user.currentUser)
	return (
		<div className='header'>
			<div className='header-top'>
				<div className='header-top-links'>
					{user ? (
						<>
							<Link to='/account'>Account: {user.name}</Link>
							<Link to='/cart'>Your Cart (0)</Link>
							<span className='header-logout'>Logout</span>
						</>
					) : (
						<>
							<Link to='/account'>Account: Guest</Link>
							<Link to='/login'>Login/Register</Link>
						</>
					)}
				</div>
			</div>
			<div className='header-bottom'>
				{/* wrapper */}
				<div className='header-logo'>
					<NavLink to='/' className='header-logo-link'>
						<h2 className='header-logo-title'>ArnoldStore</h2>
						<h4 className='header-logo-title'>Online Marketplace</h4>
					</NavLink>
				</div>

				<div className='header-nav'>
					<ul>
						<li>
							<NavLink to='/' className='header-nav-link'>
								Home
							</NavLink>
						</li>
						<li>
							<a href='/#kids' className='header-nav-link'>
								Kids
							</a>
						</li>
						<li>
							<a href='/#womens' className='header-nav-link'>
								Womens
							</a>
						</li>

						<li>
							<a href='/#mens' className='header-nav-link'>
								Men's
							</a>
						</li>

						<li>
							<NavLink to='/products' className='header-nav-link'>
								Products
							</NavLink>
						</li>
						<li>
							<NavLink to='/' className='header-nav-link'>
								Explore
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Header
