import axiosClient from './axiosClient'

const categoryAPi = {
	/**
	 * Get all category
	 */
	getCategory() {
		const url = '/categories'
		return axiosClient.get(url)
	},
}
export default categoryAPi
