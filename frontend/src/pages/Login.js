import React from 'react'
import authReg from '../components/authReg'
import { useState } from 'react'
import { TextField, Box, Button, Stack, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Login(props) {
	const [formData, setFormData] = useState({
		email: '',

		pass: '',
	})

	const { email, pass } = formData

	const navigate = useNavigate()

	function handleChange(e) {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	async function handleSubmit(e) {
		e.preventDefault()
		const userData = { email, password: pass }
		try {
			await authReg.login(userData)
			props.setData(userData)
			navigate('/')
			window.location.reload()
		} catch (err) {
			if (err.response) {
				console.log(err.response.data.message)
			} else {
				console.log(`Error: ${err.message}`)
			}
		}
	}

	return (
		<>
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
					<Stack spacing={2}>
						<TextField
							id='email'
							name='email'
							onChange={handleChange}
							value={email}
							placeholder='email'
							required
						></TextField>
						<TextField
							id='password'
							name='pass'
							type='password'
							onChange={handleChange}
							value={pass}
							placeholder='password'
							required
						></TextField>

						<Button
							sx={{
								marginTop: '30px',
							}}
							onClick={handleSubmit}
							variant='contained'
						>
							Login
						</Button>
					</Stack>
				</Box>
			</Container>
		</>
	)
}
export default Login
