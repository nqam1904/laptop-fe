import axiosClient from './axiosClient'

export const ListLaptopHomeApi = {
	getListLaptop: () => {
		const url = '/list-laptop-bests'
		return axiosClient.get(url)
	},
}
