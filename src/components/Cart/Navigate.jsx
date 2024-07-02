import {
  CreditCard,
  Luggage,
  Truck,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Separator } from "../ui/separator";

const CartNavigate = () => {
  return (
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
  );
};

export default CartNavigate;
