import React from 'react'
import Header from './Header.comp'
import Footer from './Footer.comp'

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			<main className='main-container'>{children}</main>
			<Footer />
		</>
	)
}

export default Layout
