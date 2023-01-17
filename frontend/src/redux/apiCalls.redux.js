import { publicRequest } from '../requestMethod'
import { cartClear } from './cartReducer'
import {
	loginFailure,
	loginStart,
	loginSuccess,
	logoutSuccess,
	updateInfoSuccess,
	updatePasswordSuccess,
} from './userReducer'

//handle login of the user
export const login = async (dispatch, user) => {
	dispatch(loginStart())

	try {
		const { data } = await publicRequest.post('/api/auth/login', user)
		dispatch(loginSuccess(data))
		//after a success sign up, redirect to the homepage.
		window.location.href = '/'
	} catch (error) {
		dispatch(loginFailure())
	}
}

//handle logout of the user.
export const logout = async dispatch => {
	dispatch(logoutSuccess())
	dispatch(cartClear())
	window.location.href = '/login'
}

//handle update password.
export const updatePassword = async (dispatch, user) => {
	const { data } = await publicRequest.put('/api/user/update-password', user)
	dispatch(updatePasswordSuccess(data))
}

//function to delete the account.
export const deleteAccount = async (dispatch, user) => {
	const { data } = await publicRequest.delete('/api/user/' + user)
	dispatch(logoutSuccess(data))
	//after a success delete, redirect user to the login.
	window.location.href = '/login'
}

//functions to update, the user.
export const updateInfo = async (dispatch, user) => {
	const { data } = await publicRequest.put('/api/user/update-info', user)
	dispatch(updateInfoSuccess(data))
}

export const deleteAllFromCart = async dispatch => {
	dispatch(cartClear())
	window.location.href = '/account'
}
