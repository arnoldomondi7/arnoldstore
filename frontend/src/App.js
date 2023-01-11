import React from 'react'
import Layout from './components/Layout.comp.jsx'
import Home from './pages/Home.page.jsx'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact.page.jsx'
import About from './pages/About.page.jsx'
import Products from './pages/Products.page.jsx'
import Product from './pages/Product.page.jsx'
import './App.css'
const App = () => {
	return (
		<div className='main-wraper'>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/about' element={<About />} />
					<Route path='/products' element={<Products />} />
					<Route path='/product/:id' element={<Product />} />
				</Routes>
			</Layout>
		</div>
	)
}

export default App
