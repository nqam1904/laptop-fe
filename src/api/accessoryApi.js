import { queryDetail, queryFilterCategory, queryFilterPrice } from "utils/helper";
import axiosClient from "./axiosClient";
import _ from 'lodash'
const accessoryApi = {

   getAccessory() {
      const url = '/accessories'
      return axiosClient.get(url)
   },
   getDetailAccessory(slug) {
      const nameSlug = queryDetail(slug)
      const url = `/accessories?${nameSlug}`
      return axiosClient.get(url)
   },
   queryFilterCategoryPrice({ name, value }) {
      const category = queryFilterCategory(name)
      const price = !_.isEmpty(value) ? queryFilterPrice(value) : ''
      const url = `/accessories?${category}&${price}`
      return axiosClient.get(url)
   },
   updateView(body) {
      const url = `/accessories/${body?.id}`
      return axiosClient.put(url, body)
   }
}
export default accessoryApi