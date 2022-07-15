import axiosClient from './axiosClient'

const categoryAPi = {
	/**
	 * Get all category
	 */
	getAll() {
		const url = '/categories'
		return axiosClient.get(url)
	},
}
export default categoryAPi
