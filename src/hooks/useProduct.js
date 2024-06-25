import { productApi } from "@/api"
import { useQuery } from "@tanstack/react-query"

export const useProduct = (options) => {
  return useQuery({
    ...options,
    queryKey: ['products'],
    queryFn: productApi.getProducts,
  })
}