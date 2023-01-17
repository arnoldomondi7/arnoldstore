import React, { useState } from 'react'
import { FaEye, FaTruck } from 'react-icons/fa'
import { FiTrash2 } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Checkout from './Checkout.comp'

const CartItems = () => {
	const cart = useSelector(state => state.cart)

	//calculate the tax-price.
	const taxPrice = 0.1 * cart.total

	//handle the totalPrice.
	const finishedPrice = taxPrice + cart.total

	const [open, setOpen] = useState(false)

	return (
		<div className='cart-items'>
			<div className='cart-items-div'>
				<h3 className='cart-items-title'>
					Your Cart (
					{cart.products.length === 1
						? `${cart.products.length} Item`
						: `${cart.products.length} Items`}
					)
				</h3>

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
								{cart.products.length === 0 ? (
									<h4 className='no-products'>
										Add Products In The Cart To See Them.
									</h4>
								) : (
									cart.products.map((product, i) => (
										<tr key={i}>
											<td>
												<span className='cart-items-delete'>
													<FiTrash2 />
												</span>
											</td>
											<td>
												<div className='cart-items-div'>
													<div className='cart-items-top product'>
														<div className='cart-items-top-inner '>
															<img
																src={`./assets/${product.image}`}
																alt={product.name}
																className='slider-image'
															/>
														</div>
														<div className='cart-items-top-hover'>
															<Link
																to='/product/123'
																className='cart-items-link'
															>
																<FaEye />
															</Link>
														</div>
													</div>
												</div>
											</td>
											<td>
												<h3 className='cart-items-name'>{product.name}</h3>
											</td>
											<td>
												<span className='cart-items-price'>
													${product.price?.toFixed(2)}
												</span>
											</td>
											<td>
												<div className='cart-items-quantity'>
													<div className='product-quantity-right'>
														<input type='button' value='-' className='minus' />
														<input
															type='number'
															min='1'
															step='1'
															value={product.quantity}
															className='value'
														/>
														<input type='button' value='+' className='plus' />
													</div>
												</div>
											</td>
											<td>
												<h4 className='cart-items-price-subtotal'>
													${(product.price * product.quantity)?.toFixed(2)}
												</h4>
											</td>
										</tr>
									))
								)}
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
									<span>${cart.total.toFixed(2)}</span>
								</div>
							</div>

							<div className='cart-items-right-content'>
								<div className='cart-items-right-content-left'>
									<span>shipping 10%:</span>
								</div>

								<div className='cart-items-right-content-right'>
									<span>${taxPrice.toFixed(2)}</span>
								</div>
							</div>

							<div className='cart-items-right-content'>
								<div className='cart-items-right-content-left'>
									<span className='total'>Total:</span>
								</div>

								<div className='cart-items-right-content-right'>
									<span className='total-price'>
										${finishedPrice.toFixed(2)}
									</span>
								</div>
							</div>
							{cart.products.length !== 0 && (
								<button className='checkout' onClick={() => setOpen(true)}>
									Proceed To Checkout <FaTruck />
								</button>
							)}
						</div>
					</div>
				</div>
			</div>

			{open && <Checkout setOpen={setOpen} finishedPrice={finishedPrice} />}
		</div>
	)
}

export default CartItems
