import axios from 'axios'

const API_URL = '/api/posts/'

const create = async (data, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.post(API_URL + 'create', data, config)

	return response.data
}

const update = async (data, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.put(API_URL, data, config)

	return response.data
}

const delPost = async (token, id) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	const response = await axios.delete(API_URL + `${id}`, config)

	return response.data
}

const postCall = {
	create,
	update,
	delPost,
}

export default postCall
