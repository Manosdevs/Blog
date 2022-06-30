const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel')

const getPosts = asyncHandler(async (req, res) => {
	const toSkip = req.body.text
	const posts = await Post.find().skip(toSkip).limit(6)
	const count = await Post.find().count()

	const data = [posts, count]
	res.status(200).json(data)
})

const getPost = asyncHandler(async (req, res) => {
	const post = await Post.findById(req.params.id)

	res.status(200).json(post)
})

const createPost = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400)
		throw new Error('Please add  a text field')
	}

	const post = await Post.create({
		title: req.body.title,
		body: req.body.text,
		image: req.body.image,
		postdescr: req.body.descr,
		author: req.body.author,
	})

	res.status(200).json(post)
})

const updatePost = asyncHandler(async (req, res) => {
	const post = await Post.findById(req.params.id)

	if (!post) {
		res.status(400)
		throw new Error('post not found')
	}

	const updatedPost = await Post.findByIdAndUpdate(
		req.params.id,
		{ title: req.body.title, body: req.body.text, image: req.body.image },
		{
			new: true,
		}
	)

	res.status(200).json(updatedPost)
})

const deletePost = asyncHandler(async (req, res) => {
	const post = await Post.findById(req.params.id)

	if (!post) {
		res.status(400)
		throw new Error('post not found')
	}

	await post.remove()
	res.status(200).json({ message: `deleted post ${req.params.id}` })
})

module.exports = {
	getPosts,
	getPost,

	createPost,
	updatePost,
	deletePost,
}
