import React from 'react'
import { AiOutlineUpload } from 'react-icons/ai'
import { FaImage } from 'react-icons/fa'

const UpdateImage = () => {
	return (
		<form>
			<div className='update-image'>
				<label htmlFor='image' className='label-image'>
					<FaImage />
				</label>

				<input type='file' id='image' className='user-image' />
			</div>

			<button>
				Update Image <AiOutlineUpload />
			</button>
		</form>
	)
}

export default UpdateImage
