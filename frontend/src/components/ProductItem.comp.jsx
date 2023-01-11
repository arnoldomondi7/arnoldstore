import React from 'react'
import { FaEye, FaShoppingCart, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductItem = () => {
	return (
		<div className='slider-img-div'>
			<div className='slider-img-top product'>
				<div className='slider-img-top-inner'>
					<img
						src='./assets/uploads/man-model-2.jpg'
						alt=''
						className='slider-image'
					/>
				</div>
				<div className='slider-img-top-hover'>
					<Link to='/product/123' className='slider-img-link'>
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
				<div className='slider-image-bottom-top product-top'>
					<h3 className='slider-image-title product-title'>Dope Stuff</h3>
					<span className='slider-img-star'>
						5 <FaStar />
					</span>
				</div>

				<div className='slider-image-bottom-bottom'>
					<h4 className='slider-image-price'>$99.99</h4>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
