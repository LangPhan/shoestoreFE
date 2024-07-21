import axiosClient from "@/lib/axiosConfig";
import { convertQueryString } from "@/lib/utils";

export const productApi = {
  getProducts: ({ queryKey }) => {
    const [, category, page, sort, filter] = queryKey;

    let queryParams = "";

    if (category) {
      queryParams += `categoryId=${category}&`;
    }
    if (page) {
      queryParams += `pageNo=${page.pageNo}&`;
    }
    if (sort.sortBy && sort.sortDir) {
      queryParams += `sortBy=${sort.sortBy}&sortDirection=${sort.sortDir}&`;
    }
    // Filter is an object with keys as filter types and values as filter values
    Object.keys(filter).forEach((key) => {
      if (filter[key].length > 0) {
        queryParams += `${key}=${filter[key]}&`;
      }
    });
    debugger;
    queryParams = convertQueryString(queryParams);
    return axiosClient.get(`/product?pageSize=12&${queryParams}`);
  },

  getCategoryProduct: () => {
    return axiosClient.get("/category/getList");
  },
};
