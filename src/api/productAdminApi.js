import axiosClient from "@/lib/axiosConfig";

export const getProductList = async ({ accessToken }) => {
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
};

export const getProductDetail = async ({ accessToken, productId }) => {
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
};

export const deleteProduct = async ({ accessToken, mockTestProductId }) => {
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
};
