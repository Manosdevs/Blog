import BlogItem from '../components/BlogItem'

import Grid from '@mui/material/Grid'

import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Pagination from '@mui/material/Pagination'

function Landing({ posts, count, setSkip }) {
	const torend = posts.map((elem, index) => {
		return (
			<Link to={`/posts/${elem._id}`}>
				<BlogItem
					title={elem.title}
					body={elem.body}
					key={elem._id}
					id={elem._id}
					image={elem.image}
					descr={elem.postdescr}
				/>
			</Link>
		)
	})

	const handlePageChange = (event, page) => {
		setSkip(page)
	}

	return (
		<Container maxWidth='xl' sx={{ marginY: 4 }}>
			<Grid
				container
				rowSpacing={2}
				spacing={2}
				alignItems='center'
				justifyContent='center'
				style={{ minHeight: '60vh' }}
			>
				{torend}
			</Grid>
			<Pagination count={Math.ceil(count / 6)} onChange={handlePageChange} />
		</Container>
	)
}

export default Landing
