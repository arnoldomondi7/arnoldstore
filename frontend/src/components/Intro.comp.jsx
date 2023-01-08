import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
	return (
		<div className='intro'>
			<div className='intro-left'>
				<div className='intro-left-div'>
					<div className='intro-left-content'>
						<h2 className='intro-title'> Welcome To The ArnoldStore</h2>
						<Link to='/products' className='intro-link'>
							Purchase Now!
						</Link>
					</div>

					<img src='./assets/uploads/clothing.jpg' alt='' />
				</div>
			</div>

			<div className='intro-right'>
				<div className='intro-right-div'>
					<div className='intro-right-content'>
						<div className='intro-right-inner'>
							<div className='intro-right-texts'>
								<h3 className='intro-right-title'>Women</h3>
								<p className='intro-right-desc'>Best Outfits For Ladies</p>
							</div>

							<img src='./assets/uploads/fashion-fem.jpg' alt='' />
						</div>

						<div className='intro-right-hover'>
							<div className='intro-right-hover-text'>
								<h3 className='intro-right-text-title'>Women</h3>
								<p className='intro-right-text-desc'>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								</p>
								<Link to='/products' className='intro-right-link'>
									Discover More
								</Link>
							</div>
						</div>
					</div>
					<div className='intro-right-content'>
						<div className='intro-right-inner'>
							<div className='intro-right-texts'>
								<h3 className='intro-right-title'>Men</h3>
								<p className='intro-right-desc'>Best Outfits For Men</p>
							</div>

							<img src='./assets/uploads/man-banner.jpg' alt='' />
						</div>

						<div className='intro-right-hover'>
							<div className='intro-right-hover-text'>
								<h3 className='intro-right-text-title'>Men</h3>
								<p className='intro-right-text-desc'>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								</p>
								<Link to='/products' className='intro-right-link'>
									Discover More
								</Link>
							</div>
						</div>
					</div>
					<div className='intro-right-content'>
						<div className='intro-right-inner'>
							<div className='intro-right-texts'>
								<h3 className='intro-right-title'>Kids</h3>
								<p className='intro-right-desc'>Best Outfits For Kids</p>
							</div>

							<img src='./assets/uploads/children.jpg' alt='' />
						</div>

						<div className='intro-right-hover'>
							<div className='intro-right-hover-text'>
								<h3 className='intro-right-text-title'>Kids</h3>
								<p className='intro-right-text-desc'>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								</p>
								<Link to='/products' className='intro-right-link'>
									Discover More
								</Link>
							</div>
						</div>
					</div>
					<div className='intro-right-content'>
						<div className='intro-right-inner'>
							<div className='intro-right-texts'>
								<h3 className='intro-right-title'>Accessories</h3>
								<p className='intro-right-desc'>Best Accessories For All</p>
							</div>

							<img src='./assets/uploads/accessories.jpg' alt='' />
						</div>

						<div className='intro-right-hover'>
							<div className='intro-right-hover-text'>
								<h3 className='intro-right-text-title'>Accessories</h3>
								<p className='intro-right-text-desc'>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								</p>
								<Link to='/products' className='intro-right-link'>
									Discover More
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Intro
