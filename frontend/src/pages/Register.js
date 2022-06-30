import React, { useState, useEffect } from 'react'
import { TextField, Box, Button, Stack, Container } from '@mui/material'
import authReg from '../components/authReg'
import { useNavigate } from 'react-router-dom'

function Register(props) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		pass: '',
		pass2: '',
	})

	const { name, email, pass, pass2 } = formData

	const [btnDisable, setBtnDisable] = useState(true)

	const navigate = useNavigate()

	const resetState = () => {
		setFormData({
			name: '',
			email: '',
			pass: '',
			pass2: '',
		})
	}

	useEffect(() => {
		if (name && email && pass && pass2 && pass === pass2) {
			setBtnDisable(false)
		} else if (btnDisable === false) {
			setBtnDisable(true)
		}
	}, [formData])

	function handleChange(e) {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	async function handleSubmit(e) {
		e.preventDefault()
		const userData = { name, email, password: pass }
		await authReg.reg(userData)
		resetState()
		props.setData(userData)
		navigate('/')
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
						'& .MuiTextField-root': { m: 1, width: '25ch', marginTop: '30px' },
					}}
					noValidate
					autoComplete='off'
				>
					<Stack spacing={2}>
						<TextField
							id='name'
							name='name'
							onChange={handleChange}
							value={name}
							placeholder='Name'
							required
						></TextField>
						<TextField
							id='email'
							name='email'
							onChange={handleChange}
							value={email}
							placeholder='jdoe@gmail.com'
							required
						></TextField>
						<TextField
							id='password'
							name='pass'
							onChange={handleChange}
							value={pass}
							type='password'
							placeholder='password'
							required
						></TextField>
						<TextField
							id='pass2'
							name='pass2'
							type='password'
							onChange={handleChange}
							value={pass2}
							placeholder='Confirm Password'
							required
						></TextField>
						<Button
							sx={{
								marginTop: '30px',
							}}
							onClick={handleSubmit}
							variant='contained'
							disabled={btnDisable}
						>
							Register!
						</Button>
					</Stack>
				</Box>
			</Container>
		</>
	)
}

export default Register
