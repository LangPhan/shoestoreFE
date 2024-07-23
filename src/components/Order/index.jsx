import React from "react";
import Banner from "../Products/Banner";
import OrderTable from "./OrderTable";

const Order = () => {
  return (
    <div className="mx-auto min-h-screen">
      <Banner name={"Order History"} />
      <OrderTable />
    </div>
  );
};

export default Order;
