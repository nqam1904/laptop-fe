import axiosClient from "./axiosClient";

const accessoryApi = {

   getAccessory() {
      const url = '/accessories'
      return axiosClient.get(url)
   }
}
export default accessoryApi