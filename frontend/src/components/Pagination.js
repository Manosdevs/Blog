import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import * as React from 'react'
import Typography from '@mui/material/Typography'

export default function PaginationControlled({ count, setSkip }) {
	const [page, setPage] = React.useState(1)
	const handleChange = (event, value) => {
		setPage(event.targetValue)
		setSkip(page)
	}

	const [pageCount, setPageCount] = React.useState(Math.ceil(count / 6))

	return (
		<Stack spacing={2}>
			<Typography>Page: {page}</Typography>
			<Pagination count={pageCount} page={page} onClick={handleChange} />
		</Stack>
	)
}
