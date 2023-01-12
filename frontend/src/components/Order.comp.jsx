import React from 'react'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Order = () => {
	return (
		<div className='order'>
			<h3 className='order-title'>Order Id: 33ej3uej44</h3>
			<div className='order-div'>
				<div className='order-left'>
					<h4 className='order-info-title'>Product Image</h4>
					<div className='cart-items-div'>
						<div className='cart-items-top product order-product'>
							<div className='cart-items-top-inner order-image-div'>
								<img
									src='../assets/uploads/man-model-2.jpg'
									alt=''
									className='slider-image'
								/>
							</div>
							<div className='cart-items-top-hover order-hover'>
								<Link to='/product/123' className='cart-items-link'>
									<FaEye />
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className='order-middle'>
					<h4 className='order-info-title'>User Info</h4>
					<div className='order-info'>
						<p className='order-text'>
							Fullname:<span>Arnold Omondi</span>
						</p>
						<p className='order-text'>
							Country:<span>Kenya</span>
						</p>
						<p className='order-text'>
							City:<span>00200-Nairobi</span>
						</p>
						<p className='order-text'>
							Address:<span>Wayaki way</span>
						</p>
						<p className='order-text'>
							Phone:<span>+254705257149</span>
						</p>
						<p className='order-text'>
							Quantity:<span>78</span>
						</p>

						<p className='order-text'>
							Price:<span>$700</span>
						</p>

						<p className='order-text'>
							Date:<span>31-31-2023</span>
						</p>
					</div>
				</div>

				<div className='order-right'>
					<h4 className='order-info-title'>Order Info</h4>
					<div className='order-info'>
						<p className='order-text'>
							Paid at:<span>Not Paid</span>
						</p>
						<p className='order-text'>
							Delivery At: <span>Not Delivered</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Order
