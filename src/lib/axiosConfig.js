import { API_URL } from "@/constant";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${API_URL}`,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json'
  }
})
axiosClient.interceptors.response.use(
  (response) => response?.data ?? response,
  (error) => {
    const customError = {
      message: "An unknown error occurred",
      status: null,
      data: null
    };

    if (error.response) {
      // The request was made and the server responded with a status code
      customError.message = error.response.statusText || "Error response";
      customError.status = error.response.status;
      customError.data = error.response.data;
    } else if (error.request) {
      // The request was made but no response was received
      customError.message = "No response received from server";
      customError.status = null;
      customError.data = null;
    } else {
      // Something happened in setting up the request that triggered an Error
      customError.message = error.message || "Request setup error";
      customError.status = null;
      customError.data = null;
    }
    return Promise.reject(customError)
  }
)

export default axiosClient;