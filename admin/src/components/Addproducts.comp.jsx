import React, { useState } from 'react'
import { addProducts } from '../redux/apiCalls.redux'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const Addproducts = () => {
	const [name, setName] = useState('')
	const [category, setCategory] = useState('')
	const [price, setPrice] = useState('')
	const [star, setStar] = useState('')
	const [description, setDescription] = useState('')
	const [image, setImage] = useState(null)
	const [imageOne, setImageOne] = useState(null)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(null)

	const dispatch = useDispatch()

	const addProduct = async event => {
		event.preventDefault()

		const newUrl = {}
		const newUrlOne = {}

		//upload images.
		if (image) {
			const data = new FormData()
			const fileName = Date.now() + image.name //the image name.
			data.append('name', fileName)
			data.append('file', image)
			newUrl.image = fileName

			try {
				await axios.post('/api/upload', data)
				setSuccess('Image Successfully Uploaded')
			} catch (error) {
				setError('Unable To Upload Image')
			}
		}

		//upload image one.
		if (imageOne) {
			const dataOne = new FormData()
			const fileNameOne = Date.now() + imageOne.name //the image name.
			dataOne.append('name', fileNameOne)
			dataOne.append('file', imageOne)
			newUrlOne.imageOne = fileNameOne

			try {
				await axios.post('/api/upload', dataOne)
				setSuccess('Image Successfully Uploaded')
			} catch (error) {
				setError('Unable To Upload Image')
			}
		}

		//add the product infomation.
		try {
			const result = addProducts(dispatch, {
				name,
				category,
				price,
				star,
				description,
				image: newUrl.image,
				imageOne: newUrlOne.imageOne,
			})

			//handle all error
			if (result) {
				setSuccess('Product Successfully Added.')
			}
		} catch (error) {
			setError('Error!! Product Unable To Add.')
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
							onChange={event => setCategory(event.target.value)}
							type='text'
							required
							placeholder='Product Category'
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
