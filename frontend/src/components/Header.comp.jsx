import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<div className='header'>
			<div className='header-top'>
				<div className='header-top-links'>
					<Link to='/account'>Account: Guest</Link>
					<Link to='/cart'>Your Cart (0)</Link>
					<Link to='/login'>Login/Register</Link>
				</div>
			</div>
			<div className='header-bottom'>
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
							<NavLink to='/' className='header-nav-link'>
								Mens
							</NavLink>
						</li>
						<li>
							<NavLink to='/' className='header-nav-link'>
								Womens
							</NavLink>
						</li>
						<li>
							<NavLink to='/' className='header-nav-link'>
								Kids
							</NavLink>
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
