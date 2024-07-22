import axiosClient from "@/lib/axiosConfig";

export const promotionAdminApi = {
  createPromotion: async ({ accessToken, promotion }) => {
    try {
      const res = await axiosClient.post(`/promotion/create`, promotion, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  },
  getPromotionList: async ({ queryKey }) => {
    let [, accessToken] = queryKey;
    try {
      const res = await axiosClient.get("/promotion/getAll", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  },

  getPromotionDetail: async ({ accessToken, promotionId }) => {
    try {
      const res = await axiosClient.get(`/promotion/get/${promotionId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res;
    } catch (error) {
      throw error;
    }
  },

  //   deletePromotion: async ({ accessToken, mockTestProductId }) => {
  //     try {
  //       const res = await axiosClient.delete(
  //         `/product/delete/${mockTestProductId}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${accessToken}`,
  //           },
  //         }
  //       );
  //       return res;
  //     } catch (error) {
  //       throw error;
  //     }
  //   },
};
