import axiosClient from "@/lib/axiosConfig";

export const voucherAdminApi = {
  createVoucher: async ({ accessToken, voucher }) => {
    try {
      const res = await axiosClient.post(`/voucher/create`, voucher, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  },
  getVoucherList: async ({ queryKey }) => {
    let [, accessToken] = queryKey;
    try {
      const res = await axiosClient.get("/voucher/getList", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  },
  getVoucherDetail: async ({ accessToken, voucherId }) => {
    try {
      const res = await axiosClient.get(`/voucher/${voucherId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  },
  deleteVoucherDetail: async ({ accessToken, voucherId }) => {
    try {
      const res = await axiosClient.put(`/voucher/delete/${voucherId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  },
};
