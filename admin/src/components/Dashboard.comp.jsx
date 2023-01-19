import React from 'react'

const Dashboard = () => {
	return (
		<div className='dashboard'>
			<div className='dashboard-groups'>
				<div className='dashboard-group'>
					<h4>Total Amount: </h4>
					<span className='badge'>$4000.00</span>
				</div>
				<div className='dashboard-group'>
					<h4>Total Users: </h4>
					<span className='badge'>6</span>
				</div>
				<div className='dashboard-group'>
					<h4>Total Products:</h4>
					<span className='badge'>10</span>
				</div>
				<div className='dashboard-group'>
					<h4>Total Orders:</h4>
					<span className='badge'>9</span>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
