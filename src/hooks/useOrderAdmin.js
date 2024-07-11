import { orderApi } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useOrderList = ({ accessToken }) => {
  return useQuery({
    queryKey: ["order-list-admin", accessToken],
    queryFn: orderApi.getOrderList,
  });
};

export const useOrderDetail = ({ accessToken, orderId }) => {
  return useQuery({
    queryKey: ["order-detail-admin", accessToken, orderId],
    queryFn: orderApi.getOrderDetail,
  });
};
