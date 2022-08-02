import axiosClient from "./axiosClient"

const configApi = {
   getConfig() {
      const url = '/configs'
      return axiosClient.get(url)
   }
}
export default configApi;