import { publicRequest } from '../requestMethod'
import { loginFailure, loginStart, loginSuccess } from './userReducer'

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
