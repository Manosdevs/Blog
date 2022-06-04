import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Landing from './pages/Landing'
import CreatePost from './pages/CreatePost'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PostDetail from './pages/PostDetail'
import { CssBaseline } from '@mui/material'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

function App() {
	const [userData, setUserData] = useState(
		JSON.parse(localStorage.getItem('user')) || ''
	)

	const [items, setItems] = useState([])
	const [toSkip, setToSkip] = useState(0)
	const [count, setCount] = useState(0)

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await axios.post('/api/posts', { text: toSkip })

				setItems(response.data[0])
				setCount(response.data[1])
			} catch (err) {
				if (err.response) {
					console.log(err.response.data.message)
				} else {
					console.log(`Error: ${err.message}`)
				}
			}
		}
		fetchPosts()
	}, [toSkip])

	const modifyData = (data) => setUserData(data)
	const setSkip = (pageNum) =>
		setToSkip(() => {
			let newNum = (pageNum - 1) * 6
			console.log(newNum)
			return newNum
		})

	return (
		<>
			<CssBaseline />
			<Router forceRefresh={true}>
				<Header data={userData} setData={modifyData} />

				<Routes>
					<Route
						path='/login'
						element={<Login data={userData} setData={modifyData} />}
					/>
					<Route path='/create' element={<CreatePost user={userData} />} />
					<Route
						path='/register'
						element={<Register data={userData} setData={modifyData} />}
					/>
					<Route
						path='/'
						element={<Landing posts={items} setSkip={setSkip} count={count} />}
					/>

					<Route
						path='/posts/:id'
						element={<PostDetail posts={items} user={userData} />}
					/>
				</Routes>
			</Router>
		</>
	)
}

export default App
