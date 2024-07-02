import { productApi } from "@/api"
import { keepPreviousData, useQuery } from "@tanstack/react-query"

export const useProduct = ({ category, page, sort, filter, ...options }) => {
  return useQuery({
    ...options,
    queryKey: ['products', category, page, sort, filter],
    queryFn: productApi.getProducts,
    placeholderData: keepPreviousData
  })
}


export const useCategoryProduct = () => {
  return useQuery({
    queryKey: ['category'],
    queryFn: productApi.getCategoryProduct,
    staleTime: Infinity
  })
}