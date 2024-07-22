import axiosClient from "@/lib/axiosConfig";

export const categoryAdminApi = {
  getCategoryList: async ({ accessToken }) => {
    try {
      const res = await axiosClient.get("/category/getList", {
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
