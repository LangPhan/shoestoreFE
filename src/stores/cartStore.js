import { create } from "zustand";


const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};
const setToLocalStorage = (cart) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );
}



const useCartStore = create((set, getValue) => ({
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 0,
  isLoading: false,
  voucher: null,
  totalVoucher: 0,

  handleDataOnChange: () => {
    getValue().calcCartTotal()
    getValue().calcTotalVoucher()
    setToLocalStorage(getValue().cart)
  },
  setVoucher: (voucher) => {
    set({ voucher: voucher })
  },

  calcTotalVoucher: () => {
    const discountPercent = getValue()?.voucher?.discountPercent
    if (discountPercent) {
      return set((state) => ({
        totalVoucher: Number(parseFloat((state.totalAmount * discountPercent) / 100).toFixed(2))
      }))
    }
    set({ totalVoucher: 0 })
  },
  addToCart: (product) => {
    const cart = getValue().cart;
    const tempProduct = cart.find((cartItem) => cartItem.id === product.id);
    if (tempProduct) {
      const tempCart = cart.map((cartItem) => {
        if (product.id === cartItem.id) {
          let newQuantity = 0;
          newQuantity += Number(cartItem.quantity) + Number(product.quantity);
          return { ...cartItem, quantity: newQuantity };
        } else {
          return cartItem;
        }
      });

      set({ cart: tempCart });
    } else {
      set({ cart: [...cart, product] });
    }
    getValue().handleDataOnChange()
  },

  calcCartTotal: () => {
    const cart = getValue().cart;
    if (cart) {
      const { totalItems, totalAmount } = cart.reduce(
        (total, cartItem) => {
          const { quantity, price } = cartItem;
          total.totalItems += quantity;
          total.totalAmount += price * quantity;
          return total;
        },
        { totalItems: 0, totalAmount: 0 }
      )
      set({ totalItems: totalItems });
      set({ totalAmount: totalAmount });
    }
  },

  changeProductQuantity: (action, productId) => {
    let cart = getValue().cart;
    let updatedCart = cart.map((item) => {
      if (item.id === productId) {
        if (action === "INCREASE") {
          return { ...item, quantity: item.quantity + 1 }
        }
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 }
        }
      }
      return item
    })
    set({ cart: updatedCart })
    getValue().handleDataOnChange()
  },

  removeProduct: (productId) => {
    const cart = getValue().cart
    let updatedCart = cart.filter((item) => item.id !== productId)
    set({ cart: updatedCart })
    getValue().handleDataOnChange()
  },

  clearCart: () => {
    set({ cart: [] })
    getValue().handleDataOnChange()
  }
}));

export default useCartStore;
