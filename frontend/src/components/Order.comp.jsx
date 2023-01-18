import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaEye } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Order = () => {
	//get the user fro redux.
	const user = useSelector(state => state.user.currentUser)

	const params = useParams()
	const { id } = params
	const [order, setOrder] = useState([])

	const productsMap = order.products

	const date = order.createdAt

	//get the navigation hook from react-router-dom.
	const navigate = useNavigate()

	//only logged in users can access this page.
	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(`/api/order/${id}`)
				setOrder(data)
				// console.log(data)
			} catch (error) {
				console.log(error)
			}
		}

		//call the function.
		fetchData()
		!user && navigate('/')
	}, [user, navigate, id])
	return (
		<div className='order'>
			<h3 className='order-title'>Order Id: {order._id}</h3>
			<div className='order-div'>
				<div className='order-left'>
					<h4 className='order-info-title'>Product Image</h4>

					{productsMap?.map((product, i) => (
						<div className='cart-items-div' key={i}>
							<div className='cart-items-top product order-product'>
								<div className='cart-items-top-inner order-image-div'>
									<img
										src={`../assets/${product.image}`}
										alt=''
										className='slider-image'
									/>
								</div>
								<div className='cart-items-top-hover order-hover'>
									<Link
										to={`/product/${product._id}`}
										className='cart-items-link'
									>
										<FaEye />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='order-middle'>
					<h4 className='order-info-title'>{user.name} Info</h4>
					<div className='order-info'>
						<p className='order-text'>
							Fullname:<span>{order.fullName}</span>
						</p>
						<p className='order-text'>
							Country:<span>{order.country}</span>
						</p>
						<p className='order-text'>
							City:<span>{order.city}</span>
						</p>
						<p className='order-text'>
							Address:<span>{order.address}</span>
						</p>
						<p className='order-text'>
							Phone:<span>{order.phone}</span>
						</p>
						<p className='order-text'>
							Number Of Itemsgit add . :<span>{order.quantity}</span>
						</p>

						<p className='order-text'>
							Price:<span>${order.total?.toFixed(2)}</span>
						</p>

						<p className='order-text'>
							Date:<span>{date?.substring(0, 10)}</span>
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
