import React, { useState } from 'react'
import { FaLock } from 'react-icons/fa'
import DeleteAcc from './DeleteAcc.comp'

const CloseAcc = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<p className='account-close-text'>Do You Really Have To Do This ?</p>
			<button className='close-button' onClick={event => setOpen(true)}>
				Close Your Account <FaLock />
			</button>

			{open && <DeleteAcc setOpen={setOpen} />}
		</>
	)
}

export default CloseAcc
