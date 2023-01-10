import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-top'>
				<div className='footer-div'>
					<div className='footer-logo'>
						<NavLink to='/' className='footer-logo-link'>
							<h2 className='footer-logo-title'>ArnoldStore</h2>
							<h4 className='footer-logo-title'>Online Marketplace</h4>
						</NavLink>
					</div>
					<div className='footer-links'>
						<Link to='/'>Kenya, 00200-Nairobi</Link>
						<Link to='/'>arnoldomondi7@gmail.com</Link>
						<Link to='/'>+254705257149</Link>
					</div>
				</div>
				<div className='footer-div'>
					<div className='footer-title'>
						<h4>Shopping & Categories</h4>
					</div>

					<div className='footer-links'>
						<Link to='/'>Men's Shopping</Link>
						<Link to='/'>Women's Shopping</Link>
						<Link to='/'>Kid's Shopping</Link>
					</div>
				</div>
				<div className='footer-div'>
					<div className='footer-title'>
						<h4>Usefull Links</h4>
					</div>

					<div className='footer-links'>
						<Link to='/'>Homepage</Link>
						<Link to='/about'>About Us</Link>
						<Link to='/'>Help</Link>
						<Link to='/contact'>Contact Us</Link>
					</div>
				</div>
				<div className='footer-div'>
					<div className='footer-title'>
						<h4>Help & Information</h4>
					</div>

					<div className='footer-links'>
						<Link to='/'>Helps</Link>
						<Link to='/'>FAQ's</Link>
						<Link to='/'>Shipping</Link>
						<Link to='/'>Tracking ID</Link>
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<div className='footer-bottom-copyright'>
					<p className='footer-bottom-text'>
						Copyright &copy; ArnoldStore. All Rights Reserved.
					</p>
					<p className='footer-bottom-text'>
						Designed By:
						<Link to='/'>arnoldomondi7@gmail.com </Link>
					</p>
					<p className='footer-bottom-text'>
						Destributed By:
						<Link to='/'> Arnold Omondi</Link>
					</p>

					<div className='footer-bottom-socials'>
						<Link to='/'>
							<FaFacebookF />
						</Link>
						<Link to='/'>
							<FaInstagram />
						</Link>
						<Link to='/'>
							<FaTwitter />
						</Link>
						<Link to='/'>
							<FaLinkedinIn />
						</Link>
						<Link to='/'>
							<FaYoutube />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
