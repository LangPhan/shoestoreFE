import { authApi } from "@/api"
import authStore from "@/stores/authStore"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useGetUser = ({ accessToken, ...options }) => {
  return useQuery({
    queryKey: ["getUser", accessToken],
    queryFn: authApi.getUser,
    refetchOnWindowFocus: false,
    retry: (_, error) => { error?.status !== 401 },
    ...options
  })
}
export const useRefreshToken = () => {
  const { login, logout, setFetching } = authStore();
  return useMutation({
    mutationKey: "refreshToken",
    mutationFn: (refreshToken) => {
      return authApi.refreshToken(refreshToken)
    },
    onSuccess: (data) => {
      if (data.status !== "UNAUTHORIZED") {
        login(data)
      } else {
        console.log("Refresh Logout");
        logout()
      }
    },
    onSettled: () => {
      setFetching(false)
    }
  })
}
