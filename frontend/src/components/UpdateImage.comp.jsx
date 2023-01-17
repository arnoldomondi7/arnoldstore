import axios from 'axios'
import React, { useState } from 'react'
import { AiOutlineUpload } from 'react-icons/ai'
import { FaImage } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/apiCalls.redux'

const UpdateImage = () => {
	const user = useSelector(state => state.user.currentUser)

	const [image, setImage] = useState(null)
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(null)

	const dispatch = useDispatch()

	const onUpdateImageHandler = async event => {
		event.preventDefault()

		//uploading image.
		const newImage = {
			userId: user._id,
		}

		if (image) {
			const data = new FormData()
			const fileName = Date.now() + image.name
			data.append('name', fileName)
			data.append('file', image)
			newImage.image = fileName

			try {
				await axios.post('/api/upload', data)
				setSuccess('Image Successfully Uploaded')
				logout(dispatch)
			} catch (error) {
				setError('Unable To Upload Image')
			}
		}

		//updating the image.

		try {
			await axios.put('/api/user/update/' + user._id, newImage)

			setSuccess('Image Successfully Updated')
		} catch (error) {
			setError('Error, Unable To Update The Image')
		}
	}
	return (
		<form onSubmit={onUpdateImageHandler}>
			<div className='update-image'>
				<label htmlFor='image' className='label-image'>
					<FaImage />
				</label>

				<input
					type='file'
					id='image'
					accept='.png, .jpg, .jpeg'
					className='user-image'
					onChange={event => setImage(event.target.files[0])}
				/>
			</div>

			{image && (
				<button>
					Update Image <AiOutlineUpload />
				</button>
			)}

			{error && <span className='form-error'>{error}</span>}
			{success && <span className='form-success'>{success}</span>}
		</form>
	)
}

export default UpdateImage
