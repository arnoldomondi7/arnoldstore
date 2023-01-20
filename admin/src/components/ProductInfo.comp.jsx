import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProduct } from '../redux/apiCalls.redux'
import axios from 'axios'

const ProductInfo = ({ setOpen, product }) => {
	const dispatch = useDispatch()

	const [name, setName] = useState(product.name)
	const [category, setCategory] = useState(product.category)
	const [price, setPrice] = useState(product.price)
	const [star, setStar] = useState(product.star)
	const [description, setDescription] = useState(product.description)
	const [image, setImage] = useState(null)
	const [imageOne, setImageOne] = useState(null)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(null)
	const [errorImg, setErrorImg] = useState(null)
	const [successImg, setSuccessImg] = useState(null)

	//function to update the info.

	const updateInfo = event => {
		event.preventDefault()

		try {
			updateProduct(dispatch, {
				_id: product._id,
				name,
				category,
				price,
				star,
				description,
			})

			setSuccess('Product Was Successfully Updated.')
		} catch (error) {
			setError('Product Info Failed To Update.')
		}
	}

	//function to update the image.
	const updateImage = async event => {
		event.preventDefault()

		//for the image upload.
		const newImage = {
			productId: product._id,
		}

		//upload images.
		if (image) {
			const data = new FormData()
			const fileName = Date.now() + image.name //the image name.
			data.append('name', fileName)
			data.append('file', image)
			newImage.image = fileName

			try {
				await axios.post('/api/upload', data)
				setSuccessImg('Images Successfully Uploaded')
			} catch (error) {
				setErrorImg('Unable To Upload Image')
			}
		}

		//upload image one.
		if (imageOne) {
			const dataOne = new FormData()
			const fileNameOne = Date.now() + imageOne.name //the image name.
			dataOne.append('name', fileNameOne)
			dataOne.append('file', imageOne)
			newImage.imageOne = fileNameOne

			try {
				await axios.post('/api/upload', dataOne)
				setSuccessImg('Image Successfully Uploaded')
			} catch (error) {
				setErrorImg('Unable To Upload Image')
			}
		}

		//updating the image.

		try {
			await axios.put('/api/product/update/' + product._id, newImage)

			setSuccessImg('Images Successfully Updated')
		} catch (error) {
			setErrorImg('Error, Unable To Update The Images')
		}
	}
	return (
		<div className='product-info-container'>
			<div className='product-info-wrapper'>
				<h4 className='close-product-info' onClick={() => setOpen(false)}>
					Close
				</h4>

				<h3 className='product-info-title'>Product Infomation</h3>

				<form>
					<div className='product-info-groups'>
						<div className='product-info-flex'>
							<div className='product-info-group'>
								<input
									onChange={event => setName(event.target.value)}
									type='text'
									defaultValue={name}
									placeholder='Product Name'
									required
								/>
							</div>

							<div className='product-info-group'>
								<input
									onChange={event => setCategory(event.target.value)}
									type='text'
									defaultValue={category}
									placeholder='Product Category'
									required
								/>
							</div>

							<div className='product-info-group'>
								<input
									onChange={event => setPrice(event.target.value)}
									type='text'
									defaultValue={price}
									placeholder='Product Price'
									required
								/>
							</div>

							<div className='product-info-group'>
								<input
									onChange={event => setStar(event.target.value)}
									type='text'
									defaultValue={star}
									placeholder='Product Star'
									required
								/>
							</div>
							<div className='product-info-group'>
								<textarea
									onChange={event => setDescription(event.target.value)}
									defaultValue={description}
									name=''
									id=''
									cols='30'
									rows='10'
									placeholder='Enter Description'
								></textarea>
							</div>
							<div className='product-info-group'>
								<button onClick={updateInfo} className='update-now'>
									Update Info
								</button>
							</div>

							{error && <span className='form-error'>{error}</span>}
							{success && <span className='form-success'>{success}</span>}
						</div>

						<div className='product-info-flex'>
							<div className='product-info-group image'>
								<span> Product Image</span>
								<img src={`./assets/${product.image}`} alt={product.name} />
								<input
									type='file'
									required
									accept='.png, .jpg, .jpeg'
									onChange={event => setImage(event.target.files[0])}
								/>
							</div>
							<div className='product-info-group image'>
								<span> Product Another Image</span>
								<img src={`./assets/${product.imageOne}`} alt={product.name} />
								<input
									type='file'
									required
									accept='.png, .jpg, .jpeg'
									onChange={event => setImageOne(event.target.files[0])}
								/>
							</div>
							<div className='product-info-group mt'>
								<button onClick={updateImage} className='update-now'>
									Update Image
								</button>
							</div>

							{errorImg && <span className='form-error'>{errorImg}</span>}
							{successImg && <span className='form-success'>{successImg}</span>}
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ProductInfo
