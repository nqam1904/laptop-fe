import axiosClient from "./axiosClient";

const bannerApi = {

   getBannerApi() {
      const url = '/banners'

      return axiosClient.get(url)
   }
}
export default bannerApi