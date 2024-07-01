import OrderSummary from "./OrderSummary";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Separator } from "../ui/separator";
import {
  ArrowLeft,
  BaggageClaim,
  CreditCard,
  Luggage,
  Truck,
} from "lucide-react";
import { Button } from "../ui/button";

const Cart = () => {
  const location = useLocation();
  let currentState =
    location.state?.name ||
    "Shopping Cart";

  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center my-5">
        <NavLink
          to={""}
          state={{
            name: "Shopping Cart",
          }}
          end
          className={({ isActive }) =>
            `${
              isActive &&
              "text-main font-bold"
            } inline-flex flex-col gap-1 items-center w-14`
          }
        >
          <Luggage />
          Cart
        </NavLink>
        <Separator className="w-5 px-5 mx-2 md:w-24" />
        <NavLink
          to={"address"}
          state={{
            name: "Shipping Address",
          }}
          end
          className={({ isActive }) =>
            `${
              isActive &&
              "text-main font-bold"
            } inline-flex flex-col gap-1 items-center w-14`
          }
        >
          <Truck />
          Address
        </NavLink>
        <Separator className="w-5 px-5 mx-2 md:w-24" />
        <NavLink
          to={"payment"}
          state={{ name: "Payment" }}
          end
          className={({ isActive }) =>
            `${
              isActive &&
              "text-main font-bold"
            } inline-flex flex-col gap-1 items-center w-14`
          }
        >
          <CreditCard />
          Payment
        </NavLink>
      </div>
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
              <p>3 Items</p>
            )}
          </div>
          <div className="mx-2 md:mx-5 my-5">
            <Outlet />
          </div>
        </div>
        <OrderSummary />
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
