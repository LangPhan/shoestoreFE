import { promotionAdminApi } from "@/api/promotionAdminApi";
import { useQuery } from "@tanstack/react-query";

export const usePromotionAdminList = ({ accessToken }) => {
  return useQuery({
    queryKey: ["promotion-list-admin", accessToken],
    queryFn: promotionAdminApi.getPromotionList,
  });
};
