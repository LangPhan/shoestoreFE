import { authApi } from "@/api"
import authStore from "@/stores/authStore"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useGetUser = ({ accessToken }) => {
  return useQuery({
    queryKey: ["getUser", accessToken],
    queryFn: authApi.getUser,
    refetchOnWindowFocus: false,
    retry: (_, error) => { error?.status !== 401 },
  })
}
export const useRefreshToken = () => {
  const { login, logout } = authStore();
  return useMutation({
    mutationKey: "refreshToken",
    mutationFn: (refreshToken) => {
      return authApi.refreshToken(refreshToken)
    },
    onSuccess: (data) => {
      if (data.status !== "UNAUTHORIZED") {
        login(data)
      } else {
        logout()
      }
    }
  })
}
