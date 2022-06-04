import * as React from 'react'
import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import LoginIcon from '@mui/icons-material/Login'
import PersonIcon from '@mui/icons-material/Person'
import LogoutIcon from '@mui/icons-material/Logout'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'

export default function ButtonAppBar({ data, logout }) {
	const [anchorEl, setAnchorEl] = useState(null)
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}

	const navigate = useNavigate()

	const homeFunc = () => {
		navigate('/')
		window.location.reload()
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						aria-controls='menu-appbar'
						aria-haspopup='true'
						onClick={handleMenu}
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id='menu-appbar'
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<Link to='/create'>
							<MenuItem onClick={handleClose}>Create Post</MenuItem>
						</Link>
					</Menu>

					<Link className='link2' to='/'>
						<Typography
							variant='h6'
							component='div'
							sx={{ color: 'white', flexGrow: 1, cursor: 'pointer' }}
							onClick={homeFunc}
						>
							Blog
						</Typography>
					</Link>

					{!data && (
						<div className='authButtons'>
							<Link className='link' to='/login'>
								<LoginIcon color='white' />
								<Button color='inherit'>LOGIN</Button>
							</Link>
							<Link className='link' to='/register'>
								<PersonIcon color='white' />
								<Button color='inherit'>REGISTER</Button>
							</Link>
						</div>
					)}
					{data && (
						<div onClick={logout}>
							<LogoutIcon sx={{ cursor: 'pointer' }} />
							<Button color='inherit'>Logout</Button>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	)
}
