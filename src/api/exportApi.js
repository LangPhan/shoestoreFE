import axiosClient from "@/lib/axiosConfig";

const exportApi = {
  exportOrders: async ({ accessToken }) => {
    try {
      const res = await axiosClient.get("/order/export-report", {
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

export default exportApi;
