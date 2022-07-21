import axiosClient from "./axiosClient";

const SectionApi = {

   getSection() {
      const url = '/sections'
      return axiosClient.get(url)
   }
}
export default SectionApi