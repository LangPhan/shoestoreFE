import { create } from 'zustand'

const useProductStore = create((set, get) => ({
  category: '',
  sort: {
    sortBy: '',
    sortDir: '',
  },
  filter: { colors: [], sizes: [] },
  page: {
    pageNo: 0,
    totalPages: 0,
  },

  setCategory: (category) => {
    set((state) => ({
      ...state,
      category
    })),
      get().setPage({ pageNo: 0 }) // Return pageNo to first page 
  },


  setSort: ({ sortBy, sortDir }) => {
    set((state) => ({
      ...state,
      sort: { sortBy, sortDir }
    }))
  },

  setPage: (newPage) => {
    set((state) => ({
      ...state,
      page: {
        ...state.page,
        ...newPage
      }
    }))
  },

  setFilter: (filterUpdate) => {
    set((state) => ({
      ...state,
      filter: {
        ...state.filter,
        ...filterUpdate,
      }
    }))
  },


  //   products: [],
  //   isLoading: false,
  //   url: "/product",
  //   setUrl: (newUrl) => { set({ url: newUrl }, set({ products: [] })) },
  //   fetchProducts: async () => {
  //     set({ isLoading: true })
  //     const res = await instance.get(getValue().url);
  //     if (res.status === 200) {
  //       set({ products: await res.data.products })
  //     }
  //     set({ isLoading: false })
  //   }
}))

export default useProductStore;