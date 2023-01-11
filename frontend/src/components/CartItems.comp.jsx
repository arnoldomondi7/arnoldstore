import React from 'react'
import { FaEye, FaTruck } from 'react-icons/fa'
import { FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const CartItems = () => {
	return (
		<div className='cart-items'>
			<div className='cart-items-div'>
				<h2 className='cart-items-title'>Your Cart (2 Items)</h2>

				<div className='cart-items-groups'>
					<div className='cart-items-left'>
						<table>
							<thead>
								<tr>
									<th></th>
									<th></th>
									<th>Product</th>
									<th>Price</th>
									<th>Quantity</th>
									<th>Subtotal</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<span className='cart-items-delete'>
											<FiTrash2 />
										</span>
									</td>
									<td>
										<div className='cart-items-div'>
											<div className='cart-items-top product'>
												<div className='cart-items-top-inner'>
													<img
														src='./assets/uploads/man-model-2.jpg'
														alt=''
														className='slider-image'
													/>
												</div>
												<div className='cart-items-top-hover'>
													<Link to='/product/123' className='cart-items-link'>
														<FaEye />
													</Link>
												</div>
											</div>
										</div>
									</td>
									<td>
										<h3 className='cart-items-name'>Fresh Kiks</h3>
									</td>
									<td>
										<span className='cart-items-price'>$75.00</span>
									</td>
									<td>
										<div className='cart-items-quantity'>
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
									</td>
									<td>
										<h4 className='cart-items-price-subtotal'>$75.00</h4>
									</td>
								</tr>

								<tr>
									<td>
										<span className='cart-items-delete'>
											<FiTrash2 />
										</span>
									</td>
									<td>
										<div className='cart-items-div'>
											<div className='cart-items-top product'>
												<div className='cart-items-top-inner'>
													<img
														src='./assets/uploads/man-model-2.jpg'
														alt=''
														className='slider-image'
													/>
												</div>
												<div className='cart-items-top-hover'>
													<Link to='/product/123' className='cart-items-link'>
														<FaEye />
													</Link>
												</div>
											</div>
										</div>
									</td>
									<td>
										<h3 className='cart-items-name'>Fresh Kiks</h3>
									</td>
									<td>
										<span className='cart-items-price'>$75.00</span>
									</td>
									<td>
										<div className='cart-items-quantity'>
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
									</td>
									<td>
										<h4 className='cart-items-price-subtotal'>$75.00</h4>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className='cart-items-right'>
						<div className='cart-items-right-div'>
							<h3 className='cart-items-right-title'>Cart Total.</h3>
							<div className='cart-items-right-content'>
								<div className='cart-items-right-content-left'>
									<span>Subtotal:</span>
								</div>

								<div className='cart-items-right-content-right'>
									<span>$150.99</span>
								</div>
							</div>

							<div className='cart-items-right-content'>
								<div className='cart-items-right-content-left'>
									<span>shipping 10%:</span>
								</div>

								<div className='cart-items-right-content-right'>
									<span>$17.99</span>
								</div>
							</div>

							<div className='cart-items-right-content'>
								<div className='cart-items-right-content-left'>
									<span className='total'>Total:</span>
								</div>

								<div className='cart-items-right-content-right'>
									<span className='total-price'>$168.98</span>
								</div>
							</div>

							<button className='checkout'>
								Proceed To Checkout <FaTruck />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CartItems
