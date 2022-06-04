import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import PostBody from '../components/PostBody'
import postCall from '../components/postCall'
import { useNavigate } from 'react-router-dom'

function PostDetail({ user }) {
	const { id } = useParams()
	const [blogPost, setBlogPost] = useState({})
	const navigate = useNavigate()

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await axios.get(`/api/posts/${id}`)
				setBlogPost(response.data)
				console.log(response.data)
			} catch (err) {
				console.log(err.response)
			}
		}
		fetchPost()
	}, [])

	const delFunc = () => {
		postCall.delPost(user.token, id)
		navigate('/')
		window.location.reload()
	}

	return (
		<PostBody
			title={blogPost.title}
			postdescr={blogPost.postdescr}
			image={blogPost.image}
			body={blogPost.body}
			author={blogPost.author}
			delFunc={delFunc}
		/>
	)
}

export default PostDetail
