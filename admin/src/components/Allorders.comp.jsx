import React, { useState } from 'react'
import OrderInfo from './OrderInfo.comp'

const Allorders = ({ order }) => {
	const [open, setOpen] = useState(false)
	return (
		<div className='all-orders'>
			<div className='orders-groups'>
				<div className='order-group'>
					<h4 className='order-title'>
						Order Id: <span>{order._id}</span>
					</h4>
					<p className='order-info' onClick={() => setOpen(true)}>
						View All Info.
					</p>
				</div>
			</div>

			{open && <OrderInfo setOpen={setOpen} order={order} />}
		</div>
	)
}

export default Allorders
