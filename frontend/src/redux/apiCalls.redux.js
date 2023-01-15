import { publicRequest } from '../requestMethod'
import {
	loginFailure,
	loginStart,
	loginSuccess,
	logoutSuccess,
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
	window.location.href = '/login'
}
