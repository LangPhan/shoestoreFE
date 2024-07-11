import axiosClient from "@/lib/axiosConfig";

export const orderApi = {
  getOrderList: async ({ queryKey }) => {
    let [, accessToken] = queryKey;

    try {
      const res = await axiosClient.get("/order/getList", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  },
  getOrderDetail: async ({ queryKey }) => {
    let [, accessToken, orderId] = queryKey;
    try {
      const res = await axiosClient.get(`/order/${orderId}`, {
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
