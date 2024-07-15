import axiosClient from "@/lib/axiosConfig"

export const cartApi = {
  getVoucher: () => {
    return axiosClient.get("/voucher")
  }
}