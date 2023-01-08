import React from 'react'
import { Link } from 'react-router-dom'
import {
	FaFacebook,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa'

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer-top'>
				<div className='footer-div'>a</div>
				<div className='footer-div'></div>
				<div className='footer-div'></div>
				<div className='footer-div'></div>
			</div>
			<div className='footer-bottom'>
				<div className='footer-bottom-copyright'>
					<p className='p-footer-bottom-text'>
						Copyright &copy; ArnoldStore. All Rights Reserved.
					</p>
					<p className='p-footer-bottom-text'>
						Designed By:
						<Link to='/'>arnoldomondi7@gmail.com </Link>
					</p>
					<p className='p-footer-bottom-text'>
						Destributed By:
						<Link to='/'> Arnold Omondi</Link>
					</p>

					<div className='footer-bottom-socials'>
						<FaFacebook />
						<FaInstagram />
						<FaTwitter />
						<FaLinkedinIn />
						<FaYoutube />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
