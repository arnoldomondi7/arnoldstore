import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

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
						<div className='about-us-bottom-about-us'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
