import React from 'react'
import Intro from '../components/Intro.comp'
import Lattest from '../components/Lattest.comp'
import Explore from '../components/Explore.comp'
import Socials from '../components/Socials.comp'
import Subscribe from '../components/Subscribe.comp'

const Home = () => {
	return (
		<div className='home'>
			<Intro />
			<Lattest />
			<Explore />
			<Socials />
			<Subscribe />
		</div>
	)
}

export default Home
