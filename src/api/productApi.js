import { queryDetail, queryFilterCategory, queryFilterPrice, querySearchProduct } from "utils/helper"
import axiosClient from "./axiosClient"
import _ from 'lodash'
const ProductApi = {
   getProductList() {
      const url = '/products'
      return axiosClient.get(url)
   },
   queryFilterCategory(name) {
      const category = queryFilterCategory(name)
      const url = `/products?${category} `
      return axiosClient.get(url)
   },
   queryFilterCategoryPrice({ name, value }) {
      const category = queryFilterCategory(name)
      const price = !_.isEmpty(value) ? queryFilterPrice(value) : ''
      const url = `/products?${category}&${price}`
      return axiosClient.get(url)
   },
   queryDetailLaptop(slug) {
      const nameSlug = queryDetail(slug)
      const url = `/products?${nameSlug}`
      return axiosClient.get(url)
   },
   getDetailLaptop(id) {
      const url = `/products/${id}`
      return axiosClient.get(url)
   },
   updateSlugLaptop(slug) {
      const url = `/products/${slug?.id}`
		return axiosClient.put(url, slug)
   },
   updateViewLaptop(body) {
      const url = `/products/${body?.id}`
      return axiosClient.put(url, body)
   },
   searchProduct(name) {
      const query = querySearchProduct(name)
      const url = `/products?${query}`
      return axiosClient.get(url)
   }
}

export default ProductApi