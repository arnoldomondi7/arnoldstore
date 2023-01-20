import React, { useState } from 'react'
import axios from 'axios'

const Addproducts = () => {
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')
	const [star, setStar] = useState('')
	const [description, setDescription] = useState('')
	const [image, setImage] = useState(null)
	const [imageOne, setImageOne] = useState(null)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(null)

	const addProduct = async event => {
		event.preventDefault()
		try {
			const result = axios.post('/api/product/add', {
				name,
				price,
				star,
				description,
				image,
				imageOne,
			})

			//handle all error
			if (result) {
				setSuccess('Product Successfully Added.')
			}
		} catch (error) {
			setError('Email Already In User Pick Anotherone.')
		}
	}

	return (
		<div className='form-sign'>
			<div className='form-sign-div'>
				<form onSubmit={addProduct}>
					<div className='form-sign-groups'>
						<input
							onChange={event => setName(event.target.value)}
							type='text'
							required
							placeholder='Product Name'
						/>
						<input
							type='text'
							onChange={event => setPrice(event.target.value)}
							required
							placeholder='Product Price'
						/>
						<input
							type='text'
							onChange={event => setStar(event.target.value)}
							required
							placeholder='Product Star'
						/>
						<textarea
							name=''
							id=''
							cols='30'
							rows='10'
							placeholder='Product Description'
							onChange={event => setDescription(event.target.value)}
						></textarea>
						<div>
							<label htmlFor='image'>
								<span>Select Image</span>
							</label>
							<input
								type='file'
								id='image'
								accept='.png, .jpg, .jpeg'
								onChange={event => setImage(event.target.files[0])}
								required
							/>
							<label htmlFor='image1'>
								<span>Select Another Image</span>
							</label>
							<input
								type='file'
								id='image1'
								accept='.png, .jpg, .jpeg'
								onChange={event => setImageOne(event.target.files[0])}
								required
							/>
						</div>
					</div>

					<button>Add Product</button>
					{error && <span className='form-error'>{error}</span>}
					{success && <span className='form-success'>{success}</span>}
				</form>
			</div>
		</div>
	)
}

export default Addproducts
