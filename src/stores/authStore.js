import { jwtDecode } from "jwt-decode"
import { create } from "zustand"



const authStore = create((set, get) => ({
  isAuth: false,
  user: null,
  isFetching: false,
  setFetching: (state) => {
    set({ isFetching: state })
  },
  login: (token) => {
    localStorage.setItem("token", JSON.stringify(token))
    set({ isAuth: true })
    return set({ user: jwtDecode(token.accessToken) })
  },
  logout: () => {
    localStorage.removeItem("token")
    set({ isAuth: false, user: null })
  },
  setUser: (accessToken) => {
    set({ isAuth: true })
    set({ user: jwtDecode(accessToken) })
  },
}))



export default authStore;