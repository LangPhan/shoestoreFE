import axiosClient from "@/lib/axiosConfig";

export const productApi = {
  getProducts: () => axiosClient.get('/products'),
}