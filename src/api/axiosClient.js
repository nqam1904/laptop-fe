import axios from 'axios'
import { API_URL } from 'utils/constant'

const axiosClient = axios.create({
	baseURL: API_URL,
	timeout: 30000,
	headers: {
		'Content-Type': 'application/json',
		// "Access-Control-Allow-Origin": "*",
		// "Access-Control-Allow-Headers": "Access-Control-Allow-Headers,Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Access-Control-Allow-Origin,access-control-allow-origin",
		// 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
		// 'Access-Control-Allow-Credentials': true
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
