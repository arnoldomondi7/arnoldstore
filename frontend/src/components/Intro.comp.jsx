import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
	return (
		<div className='intro'>
			<div className='intro-left'>
				<div className='intro-left-div'>
					<div className='intro-left-content'>
						<h2 className='intro-title'>Welcome to ArnoldStore</h2>
						<Link to='/products'>Purchase Now</Link>
					</div>

					<img src='./assets/uploads/left-banner.jpg' alt='' />
				</div>
			</div>
			<div className='intro-right'></div>
		</div>
	)
}

export default Intro
