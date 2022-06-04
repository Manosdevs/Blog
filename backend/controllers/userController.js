const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body

	if (!name || !email || !password) {
		res.status(400)
		throw new Error('Please add all fields')
	}

	const userExists = await User.findOne({ email })

	if (userExists) {
		res.status(409)
		throw new Error('User already exists')
	}

	//hash password
	const hashedPass = await bcrypt.hash(password, 10)

	// create user
	const user = await User.create({
		name,
		email,
		password: hashedPass,
		isAdmin: 0,
	})

	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		})
	} else {
		res.status(400)
		throw new Error('Invalid Data')
	}
})

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await User.findOne({ email })

	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		})
	} else {
		res.status(409)
		throw new Error('Invalid credentials')
	}
})

//Generate JWT

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '10d',
	})
}

module.exports = {
	registerUser,
	loginUser,
}
