import React from 'react'
import { useState } from 'react'
import { TextField, Box, Button, Container, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import postCall from '../components/postCall'

function CreatePost({ user }) {
	const [formData, setFormData] = useState({
		title: '',
		text: '',
		image: '',
		descr: '',
		author: user.name,
	})
	const [Msg, setMsg] = useState('')
	const [showMsg, setShowMsg] = useState(false)

	const { title, text, image, descr, author } = formData

	const resetState = () => {
		setFormData({
			title: '',
			text: '',
			image: '',
			descr: '',
			author: '',
		})
	}

	const navigate = useNavigate()

	function handleChange(e) {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	async function handleSubmit(e) {
		e.preventDefault()
		const postData = { title, text, image, descr, author }

		try {
			const data = await postCall.create(postData, user.token)
			resetState()
			navigate(`/posts/${data._id}`)
			setShowMsg(true)
			setMsg('Success! Redirecting...')
		} catch (err) {
			if (err.response) {
				console.log(err.response)
				setShowMsg(true)
				setMsg(err.response.data.message)
			} else {
				console.log(`Error: ${err.message}`)
				setShowMsg(true)
				setMsg(err.message)
			}
		}
	}

	return (
		<>
			{!user.name ? (
				<div className='notAuthed'>
					{' '}
					You must be logged in to create a post!
				</div>
			) : null}
			<Container
				maxWidth='xl'
				sx={{
					marginY: 4,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					component='form'
					sx={{
						'& .MuiTextField-root': {
							m: 1,
							width: '25ch',
							marginTop: '30px',
						},
					}}
					noValidate
					autoComplete='off'
				>
					{' '}
					<Stack spacing={2}>
						<TextField
							id='title'
							label='Title'
							multiline
							name='title'
							onChange={handleChange}
							value={title}
							placeholder='Title'
							required
						></TextField>
						<TextField
							id='descr'
							label='Description'
							multiline
							name='descr'
							onChange={handleChange}
							value={descr}
							placeholder='descr'
							required
						></TextField>
						<TextField
							id='text'
							label='Post Body'
							multiline
							name='text'
							onChange={handleChange}
							value={text}
							placeholder='Blogpost Body'
							required
							sx={{ width: 300 }}
						></TextField>
						<Box sx={{ display: 'flex' }}>
							<TextField
								id='image'
								name='image'
								onChange={handleChange}
								value={image}
								placeholder='Image Link'
								required
							></TextField>
							{image && <img src={image} className='createImg' alt={title} />}
						</Box>

						<Button
							sx={{
								marginTop: '30px',
								width: 100,
							}}
							onClick={handleSubmit}
							variant='contained'
						>
							Create
						</Button>
						{showMsg ? <div className='notAuthed'>{Msg}</div> : null}
					</Stack>
				</Box>
			</Container>
		</>
	)
}

export default CreatePost
