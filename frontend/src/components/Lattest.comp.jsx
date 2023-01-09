import React from 'react'
import MenLattest from './MenLattest.comp'
import WomenLattest from './WomenLattest.comp'
import KiddsLattest from './KiddsLattest.comp'

const Lattest = () => {
	return (
		<div className='lattest'>
			<WomenLattest />
			<KiddsLattest />
			<MenLattest />
		</div>
	)
}

export default Lattest
