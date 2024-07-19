import { orderApi } from "@/api"
import { useMutation, useQuery } from "@tanstack/react-query"
import { toast } from "react-toastify"

export const useGetOrderByUser = ({ accessToken, pageNo }) => {
  return useQuery({
    queryKey: ["getOrderByUser", accessToken, pageNo],
    queryFn: orderApi.getOrderByPage
  })
}

export const useCreateNewOrder = () => {
  return useMutation({
    mutationKey: "createNewOrder",
    mutationFn: ({ accessToken, orderInfo }) => {
      return orderApi.createNewOder(accessToken, orderInfo)
    },
    onError: (error) => {
      if (error.data.status === "NOT_FOUND") {
        toast.error(error.data.message)
      }
    },
  })
}

export const useCreateNewPayment = () => {
  return useMutation({
    mutationKey: "createNewPayment",
    mutationFn: async ({ accessToken, orderInfo }) => {
      return await orderApi.createNewPayment(accessToken, orderInfo)
    },
  })
}

export const useUpdatePaidStatus = () => {
  return useMutation({
    mutationKey: "updatePaymentStatus",
    mutationFn: async ({ accessToken, orderId }) => {
      return await orderApi.updatePaidStatus(accessToken, orderId)
    }
  })
}