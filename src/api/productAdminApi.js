import axiosClient from "@/lib/axiosConfig";

export const productAdminApi = {
  getProductList: async ({ queryKey }) => {
    let [, accessToken] = queryKey;
    try {
      const res = await axiosClient.get("/product/getAll", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  },

  getProductDetail: async ({ accessToken, productId }) => {
    try {
      const res = await axiosClient.get(`/product/${productId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  },

  deleteProduct: async ({ accessToken, mockTestProductId }) => {
    try {
      const res = await axiosClient.delete(
        `/product/delete/${mockTestProductId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return res;
    } catch (error) {
      throw error;
    }
  },
};
