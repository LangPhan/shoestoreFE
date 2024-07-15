import { create } from "zustand"



const authStore = create((set, get) => ({
  isAuth: false,
  user: null,
  isFetching: true,
  setFetching: (state) => {
    set({ isFetching: state })
  },
  login: (token) => {
    localStorage.setItem("token", JSON.stringify(token))
    set({ isAuth: true })
  },
  logout: () => {
    localStorage.removeItem("token")
    set({ isAuth: false, user: null })
  },
  setUser: (userInfo) => {
    set({ isAuth: true })
    set({ user: userInfo })
    set({ isFetching: false })
  },
}))



export default authStore;