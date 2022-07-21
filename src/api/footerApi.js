import axiosClient from "./axiosClient";

const footerApi = {

   getFooter() {
      const url = '/footers'
      return axiosClient.get(url)
   }
}
export default footerApi