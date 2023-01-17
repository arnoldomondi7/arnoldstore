import React from 'react'
import { FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Orders = () => {
	return (
		<div className='order'>
			<h4 className='orders-id'>
				Order Id:3412443423423dfdfdwef3
				<Link to='/order/789'>
					<FaEye />
				</Link>
			</h4>

			<h4 className='orders-id'>
				Order Id:3412443423423dfdfdwef3
				<Link to='/order/789'>
					<FaEye />
				</Link>
			</h4>

			<h4 className='orders-id'>
				Order Id:3412443423423dfdfdwef3
				<Link to='/order/789'>
					<FaEye />
				</Link>
			</h4>

			<h4 className='orders-id'>
				Order Id:3412443423423dfdfdwef3
				<Link to='/order/789'>
					<FaEye />
				</Link>
			</h4>

			<h4 className='orders-id'>
				Order Id:3412443423423dfdfdwef3
				<Link to='/order/789'>
					<FaEye />
				</Link>
			</h4>
		</div>
	)
}

export default Orders
