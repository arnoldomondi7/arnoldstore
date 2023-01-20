import { publicRequest, userRequest } from '../requestMethod'
import {
	addProductFailure,
	addProductStart,
	addProductSuccess,
	updateInfoSuccess,
} from './productReducer.redux'
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

//handle login of the user
export const addProducts = async (dispatch, product) => {
	dispatch(addProductStart())
	try {
		const response = await userRequest.post(`/api/product/add`, product)

		dispatch(addProductSuccess(response.data))
	} catch (error) {
		dispatch(addProductFailure())
	}
}

//functions to update, the user.
export const updateProduct = async (dispatch, product) => {
	const { data } = await publicRequest.put(
		'/api/product/update-product',
		product
	)
	dispatch(updateInfoSuccess(data))
}
