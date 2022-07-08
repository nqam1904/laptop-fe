import axiosClient from "./axiosClient"

const ProductApi = {
   getProdcut() {
      const url = '/products'
      axiosClient.get(url)
   }
}

export default ProductApi