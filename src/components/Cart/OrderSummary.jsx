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
import { memo, useState } from "react";
import { useVoucher } from "@/hooks/useCart";
import { v4 } from "uuid";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const OrderSummary = () => {
  const currentState =
    useLocation().state?.name ||
    "Shopping Cart";
  const navigate = useNavigate();

  const {
    totalAmount,
    totalVoucher,
    voucher: voucherSelected,
    setVoucher: setVoucherSelected,
    calcTotalVoucher,
  } = useCartStore();
  const { data: vouchers } =
    useVoucher();

  const handleDiscount = (value) => {
    setVoucherSelected(value);
    calcTotalVoucher();
  };

  return (
    <div className="w-full mx-auto md:w-1/3 h-fit max-w-[350px] rounded-xl border-y-[12px] border-main shadow-2xl">
      <div className="h-[50px] flex justify-center items-center">
        <h3 className="font-bold text-mc w-fit">
          Order Summary
        </h3>
      </div>
      <div className="flex justify-center border-y-[1px] py-2">
        <Select
          value={voucherSelected}
          onValueChange={(value) =>
            handleDiscount(value)
          }
        >
          <SelectTrigger className="w-[280px] justify-center gap-4">
            {voucherSelected ? (
              <SelectValue
                className="capitalize"
                content={
                  setVoucherSelected.name
                }
              />
            ) : (
              <>
                <TicketPercent className="text-main -rotate-45" />
                <p>Apply Coupons</p>
              </>
            )}
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <ScrollArea>
                {vouchers &&
                  vouchers.content.map(
                    (voucher) => {
                      if (
                        Number(
                          voucher.quantity
                        ) > 0
                      ) {
                        return (
                          <SelectItem
                            className="capitalize flex"
                            key={v4()}
                            value={
                              voucher
                            }
                          >
                            <span>
                              {
                                voucher.name
                              }
                            </span>

                            <span className="ml-2 text-xs text-foreground">
                              {"-" +
                                voucher.discountPercent +
                                "%"}
                            </span>
                          </SelectItem>
                        );
                      }
                    }
                  )}
              </ScrollArea>
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
          <p></p>
        </div>
        <div className="flex justify-between text-sm text-mainForeground">
          <p>Coupon Discount </p>
          <p>
            {convertConcurrency(
              totalVoucher
            )}
          </p>
        </div>
        <div className="flex justify-between text-sm text-mainForeground">
          <p>Shipping Fee </p>
          <p>Free</p>
        </div>{" "}
        <div className="py-5 border-t-[1px] flex justify-between text-sm text-mainForeground">
          <p>Total Amount </p>
          <p>
            {convertConcurrency(
              totalAmount - totalVoucher
            )}
          </p>
        </div>
        <div className="h-[40px] w-full">
          {currentState ===
            "Shopping Cart" && (
            <Button
              className="w-full"
              onClick={() =>
                navigate("address", {
                  state: {
                    name: "Shipping Address",
                  },
                })
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

export default memo(OrderSummary);
