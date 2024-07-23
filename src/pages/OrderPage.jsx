import { Outlet } from "react-router-dom";

const OrderPage = () => {
  return (
    <section className="min-h-screen">
      <Outlet />
    </section>
  );
};

export default OrderPage;
