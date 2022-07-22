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
   updateView(body) {
      const url = `/accessories/${body?.id}`
      return axiosClient.put(url, body)
   }
}
export default accessoryApi