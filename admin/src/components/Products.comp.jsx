import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import AllProducts from './AllProducts.comp'
import Addproducts from './Addproducts.comp'
import axios from 'axios'

const Products = () => {
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
		<div className='products'>
			<Tabs>
				<TabList>
					<Tab>All Products</Tab>
					<Tab> Add Products</Tab>
				</TabList>

				<TabPanel>
					<h3 className='account-content-title'>All Products:</h3>

					{products.length === 0 ? (
						<h4 className='no-products'>Currently There Are No Products</h4>
					) : (
						<div className='d-flex'>
							{products.map((product, i) => (
								<AllProducts product={product} key={i} />
							))}
						</div>
					)}
				</TabPanel>
				<TabPanel>
					<h3 className='account-content-title'>Add Products</h3>
					<Addproducts />
				</TabPanel>
			</Tabs>
		</div>
	)
}

export default Products
