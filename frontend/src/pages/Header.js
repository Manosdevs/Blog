import React from 'react'
import SearchAppBar from '../components/AppBar'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import { Typography } from '@mui/material'
import authReg from '../components/authReg'
import { useState } from 'react'
import Register from './Register'
import { useNavigate } from 'react-router-dom'

function Header(props) {
	const navigate = useNavigate()

	const onLogout = () => {
		authReg.logout()
		props.setData('')
		navigate('/login')
	}

	console.log(props.data)

	return (
		<>
			<SearchAppBar data={props.data} logout={onLogout}></SearchAppBar>
		</>
	)
}

export default Header
