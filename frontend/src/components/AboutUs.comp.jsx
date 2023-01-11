import React from 'react'
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaQuoteLeft,
	FaTwitter,
	FaYoutube,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutUs = () => {
	return (
		<div className='about-us'>
			<div className='about-us-div'>
				<div className='about-us-top'>
					<img src='./assets/uploads/contact-form.jpg' alt='' />
					<div className='about-us-texts'>
						<h2>About Our Store</h2>
						<span>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit?
						</span>
					</div>
				</div>

				<div className='about-us-bottom'>
					<div className='about-us-bottom-left'>
						<div className='about-us-bottom-img'>
							<img src='./assets/uploads/red-shoes.jpg' alt='' />
						</div>
					</div>
					<div className='about-us-bottom-right'>
						<div className='about-us-bottom-text'>
							<h2>What Do We Do?.</h2>
							<span>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</span>
							<div className='explore-quote'>
								<FaQuoteLeft />
								<p className='explore-quote-text'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.t amet
									consectetur adipisicing elit.t amet consectetur adipisicing
									elit. t amet consectetur adipisicing elit.
								</p>
							</div>
							<span>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Excepturi, veritatis dolore, dolor itaque fugit illum facere
								magni.
							</span>
						</div>
						<div className='about-us-bottom-socials'>
							<Link to='/'>
								<FaFacebook />
							</Link>
							<Link to='/'>
								<FaInstagram />
							</Link>
							<Link to='/'>
								<FaTwitter />
							</Link>
							<Link to='/'>
								<FaYoutube />
							</Link>
							<Link to='/'>
								<FaLinkedin />
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className='about-us-others'>
				<div className='about-us-content'>
					<h2>Meet The Brilliant Team</h2>
					<span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
				</div>

				<div className='about-us-images'>
					<div className='about-us-image'>
						<div className='about-us-image-top'>
							<img src='./assets/uploads/seller-1.jpg' alt='' />
							<div className='about-us-image-hover'>
								<Link to='/'>
									<FaFacebook />
								</Link>
								<Link to='/'>
									<FaInstagram />
								</Link>
								<Link to='/'>
									<FaTwitter />
								</Link>
								<Link to='/'>
									<FaYoutube />
								</Link>
								<Link to='/'>
									<FaLinkedin />
								</Link>
							</div>
						</div>

						<div className='about-us-image-bottom'>
							<h4>Sales Team </h4>
							<span>Alpha Sales Strategy</span>
						</div>
					</div>
					<div className='about-us-image'>
						<div className='about-us-image-top'>
							<img src='./assets/uploads/seller-2.jpg' alt='' />
							<div className='about-us-image-hover'>
								<Link to='/'>
									<FaFacebook />
								</Link>
								<Link to='/'>
									<FaInstagram />
								</Link>
								<Link to='/'>
									<FaTwitter />
								</Link>
								<Link to='/'>
									<FaYoutube />
								</Link>
								<Link to='/'>
									<FaLinkedin />
								</Link>
							</div>
						</div>

						<div className='about-us-image-bottom'>
							<h4>John Doe</h4>
							<span>Marketing Secretary</span>
						</div>
					</div>
					<div className='about-us-image'>
						<div className='about-us-image-top'>
							<img src='./assets/uploads/seller-3.jpg' alt='' />
							<div className='about-us-image-hover'>
								<Link to='/'>
									<FaFacebook />
								</Link>
								<Link to='/'>
									<FaInstagram />
								</Link>
								<Link to='/'>
									<FaTwitter />
								</Link>
								<Link to='/'>
									<FaYoutube />
								</Link>
								<Link to='/'>
									<FaLinkedin />
								</Link>
							</div>
						</div>

						<div className='about-us-image-bottom'>
							<h4>Good Vybes</h4>
							<span>Check Out Secretary</span>
						</div>
					</div>
				</div>
			</div>
			<div className='about-us-others'>
				<div className='about-us-content'>
					<h2>Our Services </h2>
					<span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
				</div>

				<div className='about-us-images-div'>
					<div className='about-us-image-div'>
						<h4>Lattest outfits</h4>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
							laborum vero exercitationem iure, nulla aut quaerat impedit,
							officia quia iste facere fugit, dicta excepturi voluptate harum
							delectus.
						</span>

						<img src='./assets/uploads/jane-doe.jpg' alt='' />
					</div>

					<div className='about-us-image-div'>
						<h4>Affordable Prices</h4>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
							laborum vero exercitationem iure, nulla aut quaerat impedit,
							officia quia iste facere fugit, dicta excepturi voluptate harum
							delectus.
						</span>

						<img src='./assets/uploads/about-us-02.jpg' alt='' />
					</div>

					<div className='about-us-image-div'>
						<h4>Friendly Customer Support</h4>
						<span>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
							laborum vero exercitationem iure, nulla aut quaerat impedit,
							officia quia iste facere fugit, dicta excepturi voluptate harum
							delectus.
						</span>

						<img src='./assets/uploads/about-us-03.jpg' alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
