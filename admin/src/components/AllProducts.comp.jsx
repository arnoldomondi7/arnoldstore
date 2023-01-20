import React, { useState } from 'react'
import ProductInfo from './ProductInfo.comp'

const AllProducts = ({ product }) => {
	const [open, setOpen] = useState(false)

	const url = 'http://localhost:3001/'
	return (
		<div className='all-products'>
			<div className='products-groups'>
				<div className='product-group'>
					<div className='product-header'>
						<img src={`${url}./assets/${product.image}`} alt={product.name} />
					</div>
					<div className='product-body'>
						<h4 className='product-name'>{product.name}</h4>
					</div>
					<div className='product-footer'>
						<p className='product-info' onClick={() => setOpen(true)}>
							View All Info.
						</p>
					</div>
				</div>
			</div>

			{open && <ProductInfo setOpen={setOpen} product={product} />}
		</div>
	)
}

export default AllProducts
