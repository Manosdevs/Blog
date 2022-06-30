import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'

function BlogItem({ title, body, image, descr }) {
	return (
		<Container>
			<Grid item xs={12} sm={6} md={4} sx={{ marginBottom: 2 }}>
				<Card sx={{ width: 340 }}>
					<CardActionArea>
						<CardMedia component='img' height='300' image={image} alt={title} />
						<CardContent>
							<Typography gutterBottom variant='h5' component='div'>
								{title}
							</Typography>
							<Typography variant='body2' color='text.secondary'>
								{descr}
							</Typography>
						</CardContent>
					</CardActionArea>
				</Card>
			</Grid>
		</Container>
	)
}

export default BlogItem
