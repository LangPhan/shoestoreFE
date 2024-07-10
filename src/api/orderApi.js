import axiosClient from "@/lib/axiosConfig";

export const getOrderList = async ({ accessToken }) => {
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
};

export const getOrderDetail = async ({ accessToken, orderId }) => {
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
};
