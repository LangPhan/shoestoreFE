import axiosClient from "@/lib/axiosConfig"



export const authApi = {
  login: async (userInfo) => {
    try {
      const res = await axiosClient.post("/auth/signin", userInfo)
      return res
    } catch (error) {
      if (error.status === 401) {
        throw ({ ...error, message: "Username or password is incorrect" })
      }
      throw error
    }
  },

  register: async (userInfo) => {
    try {
      const res = await axiosClient.post("/auth/signup", userInfo)
      return res
    } catch (error) {
      throw error
    }
  },

  checkAccessToken: async (accessToken) => {
    try {
      const res = await axiosClient.get("promotion/get", {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      return res
    } catch (error) {
      throw error
    }
  }
}