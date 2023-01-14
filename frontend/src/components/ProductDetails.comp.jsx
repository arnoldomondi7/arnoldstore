import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaShoppingCart, FaStar } from 'react-icons/fa'
import { useParams } from 'react-router'

const ProductDetails = () => {
	//get the specific params.
	const params = useParams()
	//get the id from the params.
	const { id } = params
	//set the product detail in the state
	const [product, setProduct] = useState([])

	// get the detail from the useEffect
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`/api/product/${id}`)

			//set the products in the setProducts.
			setProduct(data)
			//check in the log if the data is there.
			console.log(data)
		}

		fetchData()
	}, [id])
	return (
		<div className='product-details'>
			<div className='product-details-div'>
				<div className='product-details-top'>
					<img src='../assets/uploads/contact-form.jpg' alt='' />
					<div className='product-details-texts'>
						<h2>Single Product Page</h2>
						<span>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit?
						</span>
					</div>
				</div>

				<div className='product-details-bottom'>
					<div className='product-details-bottom-left'>
						<div className='product-details-bottom-img'>
							<img src={`../assets/${product.image}`} alt={product.name} />
						</div>
						<div className='product-details-bottom-img'>
							<img src={`../assets/${product?.imageOne}`} alt={product.name} />
						</div>
					</div>
					<div className='product-details-bottom-right'>
						<div className='product-details-bottom-text'>
							<div className='product-details-bottom-content'>
								<h4>{product.name}</h4>
								<span>
									{product.star}
									<FaStar />
								</span>
							</div>

							<span className='product-price'>
								${product.price?.toFixed(2)}
							</span>

							<span className='product-desc'>{product.description}</span>
						</div>
						<div className='product-details-bottom-socials'>
							<div className='product-quantity'>
								<div className='product-quantity-left'>
									<h6>No. Of Orders</h6>
								</div>
								<div className='product-quantity-right'>
									<input type='button' value='-' className='minus' />
									<input
										type='number'
										min='1'
										step='1'
										defaultValue='1'
										className='value'
									/>
									<input type='button' value='+' className='plus' />
								</div>
							</div>
						</div>

						<div className='product-details-bottom-socials total'>
							<div className='product-total'>
								<h4>Total: $4199.99</h4>
								<button>
									Add To Cart <FaShoppingCart />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
