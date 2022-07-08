import axios from 'axios'


const axiosClient = axios.create({
	baseURL: 'http://localhost:1337/',
	timeout: 30000,
	headers: {
		'Content-Type': 'application/json',
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
