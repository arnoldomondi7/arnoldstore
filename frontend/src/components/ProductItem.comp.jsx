import React from 'react'
import { FaEye, FaShoppingCart, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
	return (
		<div className='slider-img-div'>
			<div className='slider-img-top product'>
				<div className='slider-img-top-inner'>
					<img
						src={`./assets/${product.image}`}
						alt={product.name}
						className='slider-image'
					/>
				</div>
				<div className='slider-img-top-hover'>
					<Link to={`/product/${product._id}`} className='slider-img-link'>
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
					<h3 className='slider-image-title product-title'>{product.name}</h3>
					<span className='slider-img-star'>
						{product.star} <FaStar />
					</span>
				</div>

				<div className='slider-image-bottom-bottom'>
					<h4 className='slider-image-price'>${product.price.toFixed(2)} </h4>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
