import React from 'react'
import ProductItem from './ProductItem.comp'

const ProductItems = () => {
	return (
		<div className='products-items'>
			<div className='products-items-div'>
				<div className='products-items-top'>
					<img src='./assets/uploads/products-1.jpg' alt='' />
					<div className='products-items-texts'>
						<h2>Please Have A Look.</h2>
						<span>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit?
						</span>
					</div>
				</div>
			</div>

			<div className='products-items-others'>
				<div className='products-items-content'>
					<h2>Lattest Products</h2>
					<span>Have A Look At All Of Our Products</span>
				</div>

				<div className='products-items-images'>
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
				</div>
			</div>
		</div>
	)
}

export default ProductItems
