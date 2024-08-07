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

  createNewOder: async (accessToken, orderDetail) => {
    try {
      const res = await axiosClient.post("order/create", orderDetail, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return res
    } catch (error) {
      throw (error)
    }
  },
  createNewPayment: async (accessToken, orderInfo) => {
    try {
      const res = await axiosClient.post(`payment/submitOrder?orderId=${orderInfo.orderId}`, {}, {
        headers: {
          Authorization: "Bearer " + accessToken,
        }
      })
      return res
    } catch (error) {
      throw (error)
    }
  },
  updatePaidStatus: async (accessToken, orderId) => {
    try {
      const res = await axiosClient.put("order/update-payment/" + orderId, {}, {
        headers: {
          Authorization: "Bearer " + accessToken,
        }
      })
      return res
    } catch (error) {
      throw (error)
    }
  },
  getOrderByPage: ({ queryKey }) => {
    const [, accessToken, pageNo] = queryKey
    try {
      const res = axiosClient.get("order?pageSize=5&sortDirection=desc&sortBy=createDate" + `&pageNo=${pageNo}`, {
        headers: {
          Authorization: "Bearer " + accessToken
        }
      })
      return res
    } catch (error) {
      throw (error)
    }
  }
};


