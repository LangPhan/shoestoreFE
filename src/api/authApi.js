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

  verifyOTP: async (accessToken, otp) => {
    try {
      const res = await axiosClient.post(`/otp/verify`, otp, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      })
      return res
    } catch (error) {
      throw error
    }
  },

  sendOTP: async (accessToken, method) => {
    try {
      if (method !== "sendSms" && method !== "sendEmail") {
        throw new Error("Invalid method. Please use 'sendSms' or 'sendEmail'.");
      }
      const res = await axiosClient.get("otp/" + method, {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        }
      })
      return res
    } catch (err) {
      throw err
    }
  },

  getUser: async ({ queryKey }) => {
    const [, accessToken] = queryKey
    try {
      const res = await axiosClient.get("user/getUser", {
        headers: {
          Authorization: "Bearer " + accessToken
        }
      })
      return res
    } catch (error) {
      throw error
    }
  },
  refreshToken: async (refreshToken) => {
    try {
      const res = await axiosClient.post("auth/refresh-token", {}, {
        headers: {
          Authorization: "Bearer " + refreshToken
        }
      })
      return res
    } catch (error) {
      throw error
    }
  }
}