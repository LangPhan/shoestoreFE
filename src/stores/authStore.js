import { authApi } from "@/api"
import { jwtDecode } from "jwt-decode"
import { toast } from "react-toastify"
import { create } from "zustand"




const authStore = create((set, get) => ({
  isAuth: false,
  user: null,

  login: (token) => {
    localStorage.setItem("token", JSON.stringify(token))
    toast.success("Login successfully")
    set({ isAuth: true })
    set({ user: jwtDecode(token.accessToken) })
  },


  checkAccessToken: async () => {
    const accessToken = JSON.parse(localStorage.getItem("token"))?.accessToken
    if (accessToken) {
      try {
        await authApi.checkAccessToken(accessToken);
        return set({ isAuth: true });
      } catch (error) {
        if (error.response && error.response.status === 401) {
          return set({ isAuth: false });
        }
        throw error;
      }
    }
  }
}))



export default authStore;