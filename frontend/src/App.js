import React from 'react'
import Layout from './components/Layout.comp.jsx'
import Home from './pages/Home.page.jsx'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact.page.jsx'
import About from './pages/About.page.jsx'
import Products from './pages/Products.page.jsx'
import Product from './pages/Product.page.jsx'
import Login from './pages/Login.page.jsx'
import Register from './pages/Register.page.jsx'
import Cart from './pages/Cart.page.jsx'
import Account from './pages/Account.page.jsx'
import Order from './components/Order.comp.jsx'
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
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/account' element={<Account />} />
					<Route path='/order/:id' element={<Order />} />
				</Routes>
			</Layout>
		</div>
	)
}

export default App
