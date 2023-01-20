import { publicRequest } from '../requestMethod'
import {
	loginFailure,
	loginStart,
	loginSuccess,
	logoutSuccess,
} from './userReducer.redux'

//handle login of the user
export const login = async (dispatch, user) => {
	dispatch(loginStart())

	try {
		const { data } = await publicRequest.post('/api/auth/login', user)
		//handle the login for the admin.
		const isAdmin = data

		if (isAdmin.isAdmin === true) {
			dispatch(loginSuccess(data))
			//after a success sign up, redirect to the homepage.
			window.location.href = '/'
		} else {
			window.location.href = '/login'
		}
	} catch (error) {
		dispatch(loginFailure())
	}
}

//handle logout of the user.
export const logout = async dispatch => {
	dispatch(logoutSuccess())
	window.location.href = '/login'
}
