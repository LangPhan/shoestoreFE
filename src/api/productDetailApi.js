import axiosClient from "@/lib/axiosConfig";

export const productDetailApi = {
  getProductDetail: ({ queryKey }) => {
    let [, productName] = queryKey;
    let param = "";
    param += productName?.replace(" ", "%20");
    return axiosClient.get(`/product/getList?productName=${param}`);
  },
  getRelatedProduct: ({ queryKey }) => {
    const [, categoryId] = queryKey;
    return axiosClient.get(
      `/product?categoryId=${categoryId}&pageNo=0&pageSize=50&sortDirection=asc&sortBy=price`
    );
  },
};
