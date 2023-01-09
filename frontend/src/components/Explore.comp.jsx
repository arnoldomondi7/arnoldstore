import React from 'react'
import { FaPhone, FaQuoteLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Explore = () => {
	return (
		<div className='explore'>
			<div className='explore-div'>
				<div className='explore-div-left'>
					<h2 className='explore-title'> Explore Our Products</h2>
					<span className='explore-desc'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis error
						et tempora nihil possimus mollitia ut ratione aperiam doloribus!
						Voluptate quia harum iusto, quos corrupti pariatur quidem ipsum
						autem maxime.
					</span>

					<div className='explore-quote'>
						<FaQuoteLeft />
						<p className='explore-quote-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.t amet
							consectetur adipisicing elit.t amet consectetur adipisicing elit.
							t amet consectetur adipisicing elit.
						</p>
					</div>
					<p className='explore-desc-text'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
						ullam nulla veniam voluptatem, possimus earum ipsam numquam tempora
						fuga labore ratione. Enim odit quos Enim odit quos Enim odit quos
						maxime tempore voluptatum?
					</p>

					<p className='explore-desc-text'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
						ullam nulla veniam voluptatem,...
						<Link to='/contact'>
							Contact Us <FaPhone />
						</Link>
					</p>
					<Link to='/' className='explore-link'>
						Discover More
					</Link>
				</div>
				<div className='explore-div-right'>
					<div className='explore-div-cards'>
						<div className='explore-div-card'>
							<div className='explore-div-texts'>
								<h4>Leather Bags</h4>
								<span>Lattest Arrivals</span>
							</div>
						</div>
						<div className='explore-div-card'>
							<div className='explore-div-img'>
								<img src='./assets/uploads/bag-leather.jpg' alt='' />
							</div>
						</div>
						<div className='explore-div-card'>
							<div className='explore-div-img'>
								<img src='./assets/uploads/afro-market.jpg' alt='' />
							</div>
						</div>
						<div className='explore-div-card'>
							<div className='explore-div-texts'>
								<h4>Africa Street</h4>
								<span>New Products Everyday</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Explore
