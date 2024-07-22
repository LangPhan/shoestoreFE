import { API_PROD_URL } from "@/constant";
import axiosClient from "@/lib/axiosConfig";
import axios from "axios";
import FormData from "form-data";

export const productAdminApi = {
  createProduct: async ({ accessToken, product, img }) => {
    try {
      const url = API_PROD_URL + "/product/create";
      const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      };
      const formData = new FormData();
      formData.append("product", JSON.stringify(product));
      formData.append("img", img, img.name);

      const response = await axios.post(url, formData, { headers });

      return response;
    } catch (error) {
      return error;
    }
  },
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

  deleteProduct: async ({ accessToken, productId }) => {
    try {
      const res = await axiosClient.delete(`/product/delete/${productId}`, {
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
