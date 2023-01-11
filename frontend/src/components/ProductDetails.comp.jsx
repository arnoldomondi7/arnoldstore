import React from 'react'
import { FaShoppingCart, FaStar } from 'react-icons/fa'

const ProductDetails = () => {
	return (
		<div className='product-details'>
			<div className='product-details-div'>
				<div className='product-details-top'>
					<img src='../assets/uploads/contact-form.jpg' alt='' />
					<div className='product-details-texts'>
						<h2>Single Product Page</h2>
						<span>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit?
						</span>
					</div>
				</div>

				<div className='product-details-bottom'>
					<div className='product-details-bottom-left'>
						<div className='product-details-bottom-img'>
							<img src='../assets/uploads/single-prod-1.jpg' alt='' />
						</div>
						<div className='product-details-bottom-img'>
							<img src='../assets/uploads/single-prod-2.jpg' alt='' />
						</div>
					</div>
					<div className='product-details-bottom-right'>
						<div className='product-details-bottom-text'>
							<div className='product-details-bottom-content'>
								<h4>Fresh Air Jordans 1</h4>
								<span>
									5 <FaStar />
								</span>
							</div>

							<span className='product-price'>$299.99.</span>

							<span className='product-desc'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Excepturi, veritatis dolore, dolor itaque fugit illum facere
								magni.
							</span>
						</div>
						<div className='product-details-bottom-socials'>
							<div className='product-quantity'>
								<div className='product-quantity-left'>
									<h6>No. Of Orders</h6>
								</div>
								<div className='product-quantity-right'>
									<input type='button' value='-' className='minus' />
									<input
										type='number'
										min='1'
										step='1'
										value='1'
										className='value'
									/>
									<input type='button' value='+' className='plus' />
								</div>
							</div>
						</div>

						<div className='product-details-bottom-socials total'>
							<div className='product-total'>
								<h4>Total: $4199.99</h4>
								<button>
									Add To Cart <FaShoppingCart />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
