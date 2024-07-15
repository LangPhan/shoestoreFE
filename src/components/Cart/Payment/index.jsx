import useCartStore from "@/stores/cartStore";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import {
  CreditCard,
  HandCoins,
  Loader2,
  SendHorizonal,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import authStore from "@/stores/authStore";
import {
  useCreateNewOrder,
  useCreateNewPayment,
} from "@/hooks/useOrder";
import { getAccessToken } from "@/lib/utils";

const CartPayment = () => {
  const {
    cart,
    totalVoucher,
    totalAmount,
    voucher,
    clearCart,
  } = useCartStore();
  const { user } = authStore();
  const orderMutation =
    useCreateNewOrder();
  const paymentMutation =
    useCreateNewPayment();
  const [method, setMethod] =
    useState("online");
  const accessToken = getAccessToken();
  const handleOrder = () => {
    //get order item from cart
    const orderItem = cart.map(
      (item) => {
        return {
          productId: item.id,
          quantity: item.quantity,
        };
      }
    );

    let orderDetail = {
      total: Number(
        parseFloat(
          totalAmount - totalVoucher
        ).toFixed(2)
      ),
      shippingFee: 0,
      phoneNumber: user.phoneNumber,
      addressLine: user.addressLine,
      orderDetails: orderItem,
      voucherId: voucher?.id || null,
      onlinePayment:
        method === "online"
          ? true
          : false,
    };
    orderMutation.mutate(
      {
        accessToken,
        orderInfo: orderDetail,
      },
      {
        onSuccess: (data) => {
          let paymentDetail = {
            orderId: data?.id,
          };
          if (method === "online") {
            paymentMutation.mutate(
              {
                accessToken,
                orderInfo:
                  paymentDetail,
              },
              {
                onSuccess: (data) => {
                  //open url for payment
                  window.location.href =
                    data.url;
                },
              }
            );
          } else {
            clearCart();
          }
        },
      }
    );
  };

  return (
    <div>
      <RadioGroup
        defaultValue={method}
        onValueChange={(value) => {
          setMethod(value);
        }}
      >
        <div className="flex items-center space-x-2 border-[1px] border-main py-8 px-2 rounded-md gap-5">
          <RadioGroupItem
            value="online"
            id="online"
          />
          <Label
            htmlFor="online"
            className="flex items-center gap-2"
          >
            <CreditCard />
            Transfers Online{" "}
          </Label>
        </div>
        <div className="flex items-center space-x-2 border-[1px] border-main py-8 px-2 rounded-md gap-5">
          <RadioGroupItem
            value="cod"
            id="cod"
          />
          <Label
            htmlFor="cod"
            className="flex items-center gap-2"
          >
            <HandCoins />
            COD
          </Label>
        </div>
      </RadioGroup>
      <Button
        className="my-2"
        onClick={() => handleOrder()}
        disabled={
          orderMutation.isPending
        }
      >
        Place Order
        {!orderMutation.isPending ? (
          <SendHorizonal className="ml-2" />
        ) : (
          <Loader2 className="ml-2 animate-spin" />
        )}
      </Button>
    </div>
  );
};

export default CartPayment;
