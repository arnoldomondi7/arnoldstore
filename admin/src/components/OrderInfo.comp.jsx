import React from 'react'

const OrderInfo = ({ setOpen, order }) => {
	const date = order.createdAt
	const productsMap = order.products
	return (
		<div className='product-info-container'>
			<div className='product-info-wrapper'>
				<h4 className='close-product-info' onClick={() => setOpen(false)}>
					Close
				</h4>

				<h3 className='product-info-title'>Product Infomation</h3>

				<div className='product-info-groups orders-info-groups'>
					<div className='product-info-flex'>
						<div className='product-info-group'>
							<p className='user-title'>
								Full Name: <span>{order.fullName}</span>
							</p>
						</div>

						<div className='product-info-group'>
							<p className='user-title'>
								Email: <span>{order.email}</span>
							</p>
						</div>

						<div className='product-info-group'>
							<p className='user-title'>
								Country: <span>{order.country}</span>
							</p>
						</div>

						<div className='product-info-group'>
							<p className='user-title'>
								City: <span>{order.city}</span>
							</p>
						</div>

						<div className='product-info-group'>
							<p className='user-title'>
								Address: <span>{order.address}</span>
							</p>
						</div>

						<div className='product-info-group'>
							<p className='user-title'>
								Phone: <span>{order.phone}</span>
							</p>
						</div>
						<div className='product-info-group'>
							<p className='user-title'>
								Number of Products: <span>{order.quantity}</span>
							</p>
						</div>

						<div className='product-info-group'>
							<p className='user-title'>
								Total Price: <span>${order.total?.toFixed(2)}</span>
							</p>
						</div>

						<div className='product-info-group'>
							<p className='user-title'>
								Date: <span>{date?.substring(0, 10)}</span>
							</p>
						</div>
					</div>

					<div className='product-info-flex'>
						{productsMap?.map((product, i) => (
							<div className='product-info-group user-image' key={i}>
								<span> {product.name}</span>
								<img src={`./assets/${product.image}`} alt={product.name} />
							</div>
						))}
					</div>

					<div className='product-info-flex'>
						<div className='product-info-group'>
							<p className='user-title'>
								Paid At: <span>Not Paid</span>
							</p>
						</div>
						<div className='product-info-group'>
							<p className='user-title'>
								Delivered At: <span>Delivered</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OrderInfo
