import React from 'react'
import { FaEye, FaShoppingCart, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const KiddsLattest = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	}
	return (
		<div className='lattest-container'>
			<div className='lattest-div'>
				<div className='lattest-texts'>
					<h3 className='lattest-title'>Kid's Lattest Fits'</h3>
					<p className='lattest-desc'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>

				<div className='lattest-div-img'>
					<div className='lattest-div-content'>
						<Slider {...settings}>
							<div className='slider-img-div'>
								<div className='slider-img-top'>
									<div className='slider-img-top-inner'>
										<img
											src='./assets/uploads/kid-model-1.jpg'
											alt=''
											className='slider-image'
										/>
									</div>
									<div className='slider-img-top-hover'>
										<Link to='/product/456' className='slider-img-link'>
											<FaEye />
										</Link>
										<Link to='' className='slider-img-link'>
											<FaStar />
										</Link>
										<Link to='' className='slider-img-link'>
											<FaShoppingCart />
										</Link>
									</div>
								</div>
								<div className='slider-img-bottom'>
									<div className='slider-image-bottom-top'>
										<h3 className='slider-image-title'>Dope Stuff</h3>
										<span className='slider-img-star'>
											5 <FaStar />
										</span>
									</div>

									<div className='slider-image-bottom-bottom'>
										<h4 className='slider-image-price'>$99.99</h4>
									</div>
								</div>
							</div>
							<div className='slider-img-div'>
								<div className='slider-img-top'>
									<div className='slider-img-top-inner'>
										<img
											src='./assets/uploads/kid-model-2.jpg'
											alt=''
											className='slider-image'
										/>
									</div>
									<div className='slider-img-top-hover'>
										<Link to='' className='slider-img-link'>
											<FaEye />
										</Link>
										<Link to='' className='slider-img-link'>
											<FaStar />
										</Link>
										<Link to='' className='slider-img-link'>
											<FaShoppingCart />
										</Link>
									</div>
								</div>
								<div className='slider-img-bottom'>
									<div className='slider-image-bottom-top'>
										<h3 className='slider-image-title'>Dope Stuff</h3>
										<span className='slider-img-star'>
											5 <FaStar />
										</span>
									</div>

									<div className='slider-image-bottom-bottom'>
										<h4 className='slider-image-price'>$99.00</h4>
									</div>
								</div>
							</div>
							<div className='slider-img-div'>
								<div className='slider-img-top'>
									<div className='slider-img-top-inner'>
										<img
											src='./assets/uploads/kid-model-3.jpg'
											alt=''
											className='slider-image'
										/>
									</div>
									<div className='slider-img-top-hover'>
										<Link to='' className='slider-img-link'>
											<FaEye />
										</Link>
										<Link to='' className='slider-img-link'>
											<FaStar />
										</Link>
										<Link to='' className='slider-img-link'>
											<FaShoppingCart />
										</Link>
									</div>
								</div>
								<div className='slider-img-bottom'>
									<div className='slider-image-bottom-top'>
										<h3 className='slider-image-title'>Cool Stuff</h3>
										<span className='slider-img-star'>
											5 <FaStar />
										</span>
									</div>

									<div className='slider-image-bottom-bottom'>
										<h4 className='slider-image-price'>$299.00</h4>
									</div>
								</div>
							</div>
							<div className='slider-img-div'>
								<div className='slider-img-top'>
									<div className='slider-img-top-inner'>
										<img
											src='./assets/uploads/kid-kicks.jpg'
											alt=''
											className='slider-image'
										/>
									</div>
									<div className='slider-img-top-hover'>
										<Link to='' className='slider-img-link'>
											<FaEye />
										</Link>
										<Link to='' className='slider-img-link'>
											<FaStar />
										</Link>
										<Link to='' className='slider-img-link'>
											<FaShoppingCart />
										</Link>
									</div>
								</div>
								<div className='slider-img-bottom'>
									<div className='slider-image-bottom-top'>
										<h3 className='slider-image-title'>Classic Spring</h3>
										<span className='slider-img-star'>
											5 <FaStar />
										</span>
									</div>

									<div className='slider-image-bottom-bottom'>
										<h4 className='slider-image-price'>$120.00</h4>
									</div>
								</div>
							</div>
							<div className='slider-img-div'>
								<div className='slider-img-top'>
									<div className='slider-img-top-inner'>
										<img
											src='./assets/uploads/kid-model-4.jpg'
											alt=''
											className='slider-image'
										/>
									</div>
									<div className='slider-img-top-hover'>
										<Link to='' className='slider-img-link'>
											<FaEye />
										</Link>
										<Link to='' className='slider-img-link'>
											<FaStar />
										</Link>
										<Link to='' className='slider-img-link'>
											<FaShoppingCart />
										</Link>
									</div>
								</div>
								<div className='slider-img-bottom'>
									<div className='slider-image-bottom-top'>
										<h3 className='slider-image-title'>Air Force 1 X</h3>
										<span className='slider-img-star'>
											5 <FaStar />
										</span>
									</div>

									<div className='slider-image-bottom-bottom'>
										<h4 className='slider-image-price'>$90.99</h4>
									</div>
								</div>
							</div>

							<div className='slider-img-div'>
								<div className='slider-img-top'>
									<div className='slider-img-top-inner'>
										<img
											src='./assets/uploads/kid-model-5.jpg'
											alt=''
											className='slider-image'
										/>
									</div>
									<div className='slider-img-top-hover'>
										<Link to='' className='slider-img-link'>
											<FaEye />
										</Link>
										<Link to='' className='slider-img-link'>
											<FaStar />
										</Link>
										<Link to='' className='slider-img-link'>
											<FaShoppingCart />
										</Link>
									</div>
								</div>
								<div className='slider-img-bottom'>
									<div className='slider-image-bottom-top'>
										<h3 className='slider-image-title'>Timberlands</h3>
										<span className='slider-img-star'>
											5 <FaStar />
										</span>
									</div>

									<div className='slider-image-bottom-bottom'>
										<h4 className='slider-image-price'>$1199.99</h4>
									</div>
								</div>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</div>
	)
}

export default KiddsLattest
