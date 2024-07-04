import { addressApi } from "@/api"
import { useQuery } from "@tanstack/react-query"

export const useDistrictAddress = () => {
  return useQuery({
    queryKey: ['district'],
    queryFn: addressApi.getDistrictsByHCM,
    staleTime: Infinity
  })
}

export const useWardAddress = ({ district }) => {
  return useQuery({
    queryKey: ['ward', district],
    queryFn: addressApi.getWardsByDistrict
  })
}

