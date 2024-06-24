import instance from '@/lib/axiosConfig'
import { create } from 'zustand'

const useProductStore = create((set, getValue) => ({
  products: [],
  isLoading: false,
  url: "/product",
  setUrl: (newUrl) => { set({ url: newUrl }, set({ products: [] })) },
  fetchProducts: async () => {
    set({ isLoading: true })
    const res = await instance.get(getValue().url);
    if (res.status === 200) {
      set({ products: await res.data.products })
    }
    set({ isLoading: false })
  }
}))

export default useProductStore;