import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TicketPercent } from "lucide-react";
import { Button } from "../ui/button";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import useCartStore from "@/stores/cartStore";
import { convertConcurrency } from "@/lib/utils";

const OrderSummary = () => {
  const currentState =
    useLocation().state?.name ||
    "Shopping Cart";
  const navigate = useNavigate();
  const { totalAmount } =
    useCartStore();
  return (
    <div className="w-full mx-auto md:w-1/3 h-fit max-w-[350px] rounded-xl border-y-[12px] border-main shadow-2xl">
      <div className="h-[50px] flex justify-center items-center">
        <h3 className="font-bold text-mc w-fit">
          Order Summary
        </h3>
      </div>
      <div className="flex justify-center border-y-[1px] py-2">
        <Select defaultValue="">
          <SelectTrigger className="w-[280px] justify-center gap-4">
            <TicketPercent className="text-main -rotate-45" />
            <p>Apply Coupons</p>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>
                North America
              </SelectLabel>
              <SelectItem value="est">
                Eastern Standard Time
                (EST)
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="font-bold mx-5 py-8 flex flex-col gap-3 border-b-[1px]">
        <h3 className="text-base">
          PRICE DETAILS (4 items)
        </h3>
        <div className="flex justify-between text-sm text-mainForeground">
          <p>Total </p>
          <p>
            {convertConcurrency(
              totalAmount
            )}
          </p>
        </div>
        <div className="flex justify-between text-sm text-mainForeground">
          <p>Discount</p>
          <p>$800</p>
        </div>
        <div className="flex justify-between text-sm text-mainForeground">
          <p>Coupon Discount </p>
          <p>$800</p>
        </div>
        <div className="flex justify-between text-sm text-mainForeground">
          <p>Shipping Fee </p>
          <p>Free</p>
        </div>{" "}
        <div className="py-5 border-t-[1px] flex justify-between text-sm text-mainForeground">
          <p>Total Amount </p>
          <p>
            {convertConcurrency(
              totalAmount
            )}
          </p>
        </div>
        <div className="h-[40px] w-full">
          {currentState ===
            "Shopping Cart" && (
            <Button
              className="w-full"
              onClick={() =>
                navigate("address")
              }
            >
              PLACE ORDER
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
