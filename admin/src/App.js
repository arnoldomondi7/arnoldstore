import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.page'
import Layout from './components/Layout.comp'

const App = () => {
	return (
		<div className='main-wraper'>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</Layout>
		</div>
	)
}

export default App
