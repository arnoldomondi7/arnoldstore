import React from 'react'

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
							<h2>What Do We Do?.</h2>
							<span>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</span>
							<div className='explore-quote'>
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
						<div className='product-details-bottom-socials'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
