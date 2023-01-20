import React from 'react'

const ProductInfo = ({ setOpen, product }) => {
	return (
		<div className='product-info-container'>
			<div className='product-info-wrapper'>
				<h4 className='close-product-info' onClick={() => setOpen(false)}>
					Close
				</h4>

				<h3 className='product-info-title'>Product Infomation</h3>

				<div className='product-info-groups'>
					<div className='product-info-flex'>
						<div className='product-info-group'>
							<input
								type='text'
								defaultValue={product.name}
								placeholder='Product Name'
								required
							/>
						</div>

						<div className='product-info-group'>
							<input
								type='text'
								defaultValue={product.price}
								placeholder='Product Price'
								required
							/>
						</div>

						<div className='product-info-group'>
							<input
								type='text'
								defaultValue={product.star}
								placeholder='Product Star'
								required
							/>
						</div>
					</div>

					<div className='product-info-flex'>
						<div className='product-info-group'>
							<textarea
								defaultValue={product.description}
								name=''
								id=''
								cols='30'
								rows='10'
								placeholder='Enter Description'
							></textarea>
						</div>

						<div className='product-info-group image'>
							<span> Product Image</span>
							<img src={`./assets/${product.image}`} alt={product.name} />
							<input type='file' required />
						</div>
						<div className='product-info-group image'>
							<span> Product Another Image</span>
							<img src={`./assets/${product.imageOne}`} alt={product.name} />
							<input type='file' required />
						</div>
					</div>
				</div>
				<div className='product-info-group'>
					<button className='update-now'>Update</button>
				</div>
			</div>
		</div>
	)
}

export default ProductInfo
