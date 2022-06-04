const mongoose = require('mongoose')

const postSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'Please add a text value'],
		},
		author: {
			type: String,
		},
		body: {
			type: String,
			required: true,
		},
		image: {
			type: String,
		},
		postdescr: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Post', postSchema)
