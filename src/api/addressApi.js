import { API_PLACE_URL } from "@/constant"
import axios from "axios"

const axiosAddress = axios.create({
  baseURL: `${API_PLACE_URL}`,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosAddress.interceptors.response.use(
  (response) => response?.data ?? response,
  (error) => {
    const customError = {
      message: "An unknown error occurred",
      status: null,
      data: null
    };
    return Promise.reject(error)
  })

export const addressApi = {
  getDistrictsByHCM: () => {
    return axiosAddress.get("/province/district/79")
  },
  getWardsByDistrict: ({ queryKey }) => {
    const [, district] = queryKey
    if (district) {
      return axiosAddress.get("/province/ward/" + district)
    }
    return ""
  }
}
