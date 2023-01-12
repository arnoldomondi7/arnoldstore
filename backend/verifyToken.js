import jwt from 'jsonwebtoken'

//verify the token.
const verifyToken = async (req, res, next) => {
	const authHeader = req.headers.token

	if (authHeader) {
		const token = authHeader.split('')[1]
		jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
			if (error) {
				return res.status(402).json('Invalid Token!!')
			}

			req.user = user

			next()
		})
	} else {
		return res.status(500).send('You Are Not Authenticated.')
	}
}

export default verifyToken
