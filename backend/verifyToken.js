import jwt from 'jsonwebtoken'

//verify the token.
const verifyToken = async (req, res, next) => {
	const authHeader = req.headers.token

	if (authHeader) {
		const token = authHeader.split(' ')[1]

		//verify the token.
		jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
			//handle error.
			if (error) res.status(403).json('Invalid Token')

			req.user = user
			next()
		})
	} else {
		return res.status(401).json('You Are Not Authenticated')
	}
}

const verifyTokenAndAdmin = (req, res, next) => {
	verifyToken(req, res, () => {
		if (req.user.isAdmin) {
			next()
		} else {
			res.status(403).json('Restricted Resource, Admin only.')
		}
	})
}

export default verifyTokenAndAdmin
