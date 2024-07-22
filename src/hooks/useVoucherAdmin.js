import { voucherAdminApi } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const useVoucherAdminList = ({ accessToken }) => {
  return useQuery({
    queryKey: ["voucher-list-admin", accessToken],
    queryFn: voucherAdminApi.getVoucherList,
  });
};
