import React from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { Typography, Box } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

function PostBody({ title, postdescr, image, body, author, delFunc }) {
	return (
		<Container
			maxWidth='xl'
			sx={{
				marginY: 4,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Stack spacing={2}>
				<Box sx={{ width: '100%', maxWidth: 700 }}>
					<Typography
						variant='h2'
						component='h1'
						sx={{ overflowWrap: 'break-word' }}
					>
						{title}
					</Typography>
					<Box
						sx={{
							width: '100%',
							maxWidth: 700,
							display: 'flex',
							justifyContent: 'space-around',
							marginBottom: 2,
						}}
					>
						<Typography
							component='address'
							variant='subtitle1'
							sx={{ overflowWrap: 'break-word', flexGrow: 1 }}
						>
							By {author}
						</Typography>
						<DeleteForeverIcon
							sx={{ marginRight: 1, cursor: 'pointer' }}
							onClick={delFunc}
						/>
					</Box>
					<Typography
						variant='body2'
						component='summary'
						sx={{ overflowWrap: 'break-word' }}
					>
						{postdescr}
					</Typography>
					<img className='postImg' src={image} alt={title} />
					<Typography
						component='article'
						variant='body1'
						sx={{ overflowWrap: 'break-word' }}
					>
						{body}
					</Typography>
				</Box>
			</Stack>
		</Container>
	)
}

export default PostBody
