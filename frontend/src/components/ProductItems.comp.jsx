import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem.comp'
import axios from 'axios'

const ProductItems = () => {
	//set products from the backend into the state.
	const [products, setProducts] = useState([])

	//get the data from the database.
	//to the frontend.
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get('/api/product/all')

			//set the products in the setProducts.
			setProducts(data)
			//check in the log if the data is there.
			// console.log(data)
		}

		//call the function.
		fetchData()
	}, [])
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
				{products.length === 0 ? (
					<h4 className='no-products'>Currently There Are No Products</h4>
				) : (
					<div className='products-items-images'>
						{products.map((product, i) => (
							<ProductItem product={product} key={i} />
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default ProductItems
