import { productDetailApi } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useProductDetail = ({ productName }) => {
  return useQuery({
    queryKey: ["product-detail", productName],
    queryFn: productDetailApi.getProductDetail,
  });
};

export const useRelatedProduct = ({ categoryId }) => {
  return useQuery({
    queryKey: ["related-product", categoryId],
    queryFn: productDetailApi.getRelatedProduct,
  });
};
