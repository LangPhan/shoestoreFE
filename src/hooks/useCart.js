import { cartApi } from "@/api"
import { useQuery } from "@tanstack/react-query"

export const useVoucher = () => {
  return useQuery({
    queryKey: ["getVoucher"],
    queryFn: cartApi.getVoucher,
    staleTime: Infinity
  })
}