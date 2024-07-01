import React from "react";
import CardItem from "./CardItem";

const CartDetail = () => {
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
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </>
  );
};

export default CartDetail;
