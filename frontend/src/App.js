import React from 'react'
import Layout from './components/Layout.comp.jsx'
import Home from './pages/Home.page.jsx'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './pages/Contact.page.jsx'
const App = () => {
	return (
		<div className='main-wraper'>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</Layout>
		</div>
	)
}

export default App
