const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const {
	getPosts,
	createPost,
	updatePost,
	deletePost,
	getPost,
} = require('../controllers/postController')

router.post('/', getPosts)

router.get('/:id', getPost)

router.post('/create', protect, createPost)

router.put('/:id', updatePost)

router.delete('/:id', protect, deletePost)

module.exports = router
