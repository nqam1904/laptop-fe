import axios from 'axios'
import StorageKeys from 'constants/Storage-key'
import { API_URL } from 'config'

const storage = localStorage || window.localStorage

export function getAccessToken() {
	if (storage.getItem(StorageKeys.TOKEN)) {
		return storage.getItem(StorageKeys.TOKEN)
	}
	return ''
}

const axiosClient = axios.create({
	baseURL: API_URL,
	timeout: 30000,
	headers: {
		'Content-Type': 'application/json',
	},
})

// Add a request interceptor
axiosClient.interceptors.request.use(
	function (config) {
		config.headers['Authorization'] = 'Bearer ' + getAccessToken()
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
