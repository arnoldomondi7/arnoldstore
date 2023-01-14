import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const Subscribe = () => {
	return (
		<div className='subscribe'>
			<div className='subscribe-div'>
				<div className='subscribe-left'>
					<h2 className='subscribe-title'>
						By Subscribing To Our NewsLetter You Get 35% Off!!
					</h2>
					<span className='subscribe-desc'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil atque
						magnam debitis quisquam eligendi harum.eligendi harum.
					</span>

					<form>
						<div className='subscribe-form-group'>
							<input type='text' placeholder='Enter Name' required />
							<input type='email' placeholder='Enter Email' required />
							<button>
								<FaPaperPlane />
							</button>
						</div>
					</form>
				</div>
				<div className='subscribe-right'>
					<div className='subscribe-right-left'>
						<div>
							<h4>Store Location:</h4>
							<span>Kenya, 00200-Nairobi</span>
						</div>
						<div>
							<h4>Phone:</h4>
							<span>+254705257149</span>
						</div>
						<div>
							<h4>Office Location:</h4>
							<span>Wayaki way, Westlands.</span>
						</div>
					</div>
					<div className='subscribe-right-right'>
						<div>
							<h4>Working Hours:</h4>
							<span>0800hrs - 1900hr Mon-Fri</span>
						</div>
						<div>
							<h4>Email:</h4>
							<span>arnoldomondi7@gmail.com</span>
						</div>
						<div>
							<h4>Social Media:</h4>
							<span>Facebook, Instagram, Twitter, LinkedIN, Youtube</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Subscribe
