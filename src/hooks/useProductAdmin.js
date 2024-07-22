import { productAdminApi } from "@/api/productAdminApi";
import { useQuery } from "@tanstack/react-query";

export const useProductAdminList = ({ accessToken }) => {
  return useQuery({
    queryKey: ["product-list-admin", accessToken],
    queryFn: productAdminApi.getProductList,
  });
};
