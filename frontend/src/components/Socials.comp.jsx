import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'

const Socials = () => {
	return (
		<div className='socials'>
			<div className='socials-div'>
				<div className='socials-top'>
					<h2>Social Media</h2>
					<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
				</div>
				<div className='socials-bottom'>
					<div className='socials-bottom-images'>
						<div className='social-bottom-img'>
							<img src='./assets/uploads/ig-social-1.jpg' alt='' />
							<div className='socials-hover'>
								<Link to='/'>Fashion</Link>
								<FaInstagram />
							</div>
						</div>

						<div className='social-bottom-img'>
							<img src='./assets/uploads/ig-social-2.jpg' alt='' />
							<div className='socials-hover'>
								<Link to='/'>New</Link>
								<FaInstagram />
							</div>
						</div>

						<div className='socials-bottom-images'>
							<div className='social-bottom-img'>
								<img src='./assets/uploads/ig-social-3.jpg' alt='' />
								<div className='socials-hover'>
									<Link to='/'>Brand</Link>
									<FaInstagram />
								</div>
							</div>

							<div className='social-bottom-img'>
								<img src='./assets/uploads/ig-social-4.jpg' alt='' />
								<div className='socials-hover'>
									<Link to='/'>Make Ups</Link>
									<FaInstagram />
								</div>
							</div>

							<div className='social-bottom-img'>
								<img src='./assets/uploads/ig-social-5.jpg' alt='' />
								<div className='socials-hover'>
									<Link to='/'>Leather</Link>
									<FaInstagram />
								</div>
							</div>

							<div className='social-bottom-img'>
								<img src='./assets/uploads/ig-social-6.jpg' alt='' />
								<div className='socials-hover'>
									<Link to='/'>Bags</Link>
									<FaInstagram />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Socials
