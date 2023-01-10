import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const FormCont = () => {
	return (
		<div className='form'>
			<div className='form-div'>
				<div className='form-top'>
					<img src='./assets/uploads/contact-form.jpg' alt='' />
					<div className='form-texts'>
						<h2>Contact us</h2>
						<span>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit?
						</span>
					</div>
				</div>
				<div className='form-bottom'>
					<div className='form-bottom-left'>
						<div className='form-bottom-maps'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.364608344356!2d36.80127391626449!3d-1.268103232653036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xad2c84df1f7f2ec8!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1673352766033!5m2!1sen!2ske'
								width={600}
								height={450}
								style={{ border: 'none' }}
								allowFullScreen=''
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
								title='westlands map'
							></iframe>
						</div>
					</div>
					<div className='form-bottom-right'>
						<div className='form-bottom-text'>
							<h2>Hello, Talk to Us.</h2>
							<span>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</span>
						</div>
						<div className='form-bottom-form'>
							<form>
								<div className='form-bottom-groups'>
									<input required type='text' placeholder='Enter Name' />
									<input required type='email' placeholder='Enter Email' />
								</div>

								<div className='form-bottom-groups'>
									<textarea
										name=''
										id=''
										cols='30'
										rows='10'
										placeholder='Tell Us Anything...'
									></textarea>
								</div>

								<button className='form-bottom-button'>
									<FaPaperPlane />
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormCont
