const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name'],
		},

		email: {
			type: String,
			required: [true, 'Please add a name'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
		},
		isAdmin: {
			type: Number,
			required: [true],
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('User', userSchema)
