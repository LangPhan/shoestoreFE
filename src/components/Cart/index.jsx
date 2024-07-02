import OrderSummary from "./OrderSummary";
import {
  Link,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  ArrowLeft,
  BaggageClaim,
  Truck,
} from "lucide-react";
import { Button } from "../ui/button";
import CartNavigate from "./Navigate";
import useCartStore from "@/stores/cartStore";
import Empty from "../Products/ProductList/Empty";
import CartNavigate from "./Navigate";
import useCartStore from "@/stores/cartStore";
import Empty from "../Products/ProductList/Empty";

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let currentState =
    location.state?.name ||
    "Shopping Cart";
  const { totalItems, cart } =
    useCartStore();

  if (totalItems === 0) {
    return (
      <>
        <Empty />
        <div className="w-full flex justify-center">
          <Button>
            <Link to={"/product"}>
              Products
            </Link>
          </Button>
        </div>
      </>
    );
  }
  return (
    <>
      <CartNavigate />
      <CartNavigate />
      <div className="flex flex-col md:flex-row gap-5 my-10]">
        <div className="w-full md:w-2/3 shadow-xl rounded-xl">
          <div className="h-fit flex justify-between items-center mx-2 md:mx-8 py-5 font-bold text-mc border-b-[1px]">
            <span className="inline-flex gap-2 h-fit items-center">
              {currentState ===
              "Shopping Cart" ? (
                <BaggageClaim className="w-8 h-8 text-main" />
              ) : (
                <Truck className="w-8 h-8 text-main" />
              )}
              <h2>{currentState}</h2>
            </span>
            {currentState ===
              "Shopping Cart" && (
              <p>
                {cart &&
                  `${cart.length} items`}
              </p>
            )}
          </div>
          <div className="mx-2 md:mx-5 my-5">
            <Outlet />
          </div>
        </div>
        {totalItems !== 0 ? (
          <OrderSummary />
        ) : null}
      </div>
      {currentState ===
        "Shopping Cart" && (
        <Button
          variant="ghost"
          className="inline-flex gap-1 cursor-pointer hover:shadow-2xl font-bold text-main select-none my-5"
          onClick={() =>
            navigate("/product")
          }
        >
          <ArrowLeft />
          Continue Shopping
        </Button>
      )}
    </>
  );
};

export default Cart;
