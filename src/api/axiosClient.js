import axios from 'axios'
import { API_URL } from 'utils/constant'

const axiosClient = axios.create({
	baseURL: API_URL,
	timeout: 30000,
	headers: {
		'Content-Type': 'application/json',
		"Access-Control-Allow-Origin": "*"
	},
})

// Add a request interceptor
axiosClient.interceptors.request.use(
	function (config) {

		return config
	},
	function (error) {
		return Promise.reject(error)
	}
)

// Add a response interceptor
axiosClient.interceptors.response.use(
	function (response) {
		return response.data
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error.response.data.message)
	}
)

export default axiosClient
