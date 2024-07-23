import useCartStore from "@/stores/cartStore";
import React from "react";
import { v4 } from "uuid";
import CardItem from "./CardItem";

const CartDetail = () => {
  const { cart } = useCartStore();
  return (
    <>
      <div className="col text-center text-mainForeground font-semibold pb-5">
        <h3 className="col-span-2">
          Product Details
        </h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Total</h3>
      </div>
      <div className="flex flex-col items-center gap-5">
        {cart &&
          cart.map((item) => {
            return (
              <CardItem
                key={v4()}
                id={item.id}
                name={item.name}
                image={item.imgLink}
                color={item.color}
                price={item.price}
                quantity={item.quantity}
                size={item.size}
                categoryId={
                  item.category.id
                }
                total={
                  item.price *
                  item.quantity
                }
              />
            );
          })}
      </div>
    </>
  );
};

export default CartDetail;
