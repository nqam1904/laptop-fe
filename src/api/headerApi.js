import axiosClient from "./axiosClient"

const HeaderApi = {

   getHeader() {
      const url = '/headers'
      return axiosClient.get(url)
   }
}
export default HeaderApi