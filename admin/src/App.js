import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.page'
import Login from './pages/Login.page'

const App = () => {
	return (
		<div className='main-wraper'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</div>
	)
}

export default App
