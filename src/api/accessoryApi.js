import { queryDetailAccessory } from "utils/helper";
import axiosClient from "./axiosClient";

const accessoryApi = {

   getAccessory() {
      const url = '/accessories'
      return axiosClient.get(url)
   },
   getDetailAccessory(slug) {
      const nameSlug = queryDetailAccessory(slug)
      const url = `/accessories?${nameSlug}`
      return axiosClient.get(url)
   },
}
export default accessoryApi