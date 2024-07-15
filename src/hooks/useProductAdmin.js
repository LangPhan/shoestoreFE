import { productAdminApi } from "@/api/productAdminApi";
import { useQuery } from "@tanstack/react-query";

export const useProductAdminList = ({ accessToken }) => {
  return useQuery({
    queryKey: ["product-list-admin", accessToken],
    queryFn: productAdminApi.getProductList,
  });
};

// export const useProductDetailAdmin = ({ accessToken, orderId }) => {
//   return useQuery({
//     queryKey: ["product-detail-admin", accessToken, orderId],
//     queryFn: productAdminApi.getProductDetail,
//   });
// };
