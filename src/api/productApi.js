import axiosClient from "./axiosClient"

const ProductApi = {
   getProductList() {
      const url = '/products'
      return axiosClient.get(url)
   }
}

export default ProductApi