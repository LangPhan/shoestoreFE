import React from "react";
import { create } from "zustand";

const MAXIMUM_QUANTITY = 5;

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const useCartStore = create((set, getValue) => ({
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 0,
  isLoading: false,
  addToCart: (product) => {
    const { id, name, desc, color, imageUrl, price, quantity } = product;
    const cart = getValue().cart;
    const tempProduct = cart.find((cartItem) => cartItem.id === id);

    if (tempProduct) {
      const tempCart = cart.map((cartItem) => {
        if (id === cartItem.id) {
          let newQuantity = 0;
          newQuantity += Number(cartItem.quantity) + Number(quantity);
          if (newQuantity >= MAXIMUM_QUANTITY) newQuantity = MAXIMUM_QUANTITY;
          return { ...cartItem, quantity: newQuantity };
        } else {
          return cartItem;
        }
      });

      set({ cart: tempCart });
    } else {
      const newProduct = {
        id,
        name,
        desc,
        color,
        imageUrl,
        price,
        quantity,
      };

      set({ cart: [...cart, newProduct] });
    }
  },
  calcCartTotal: () => {
    const cart = getValue().cart;
    const { totalItems, totalAmount } = cart.reduce(
      (total, cartItem) => {
        const { quantity, price } = cartItem;
        total.totalItems += quantity;
        total.totalAmount += price * quantity;
        return total;
      },
      { totalItems: 0, totalAmount: 0 }
    );

    set({ totalItems: totalItems });
    set({ totalAmount: totalAmount });
  },
}));

export default useCartStore;
