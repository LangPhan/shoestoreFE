import React, {
  useEffect,
} from "react";
import {
  Link,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  CircleCheck,
  CircleX,
} from "lucide-react";
import {
  convertToDate,
  formatCurrencyVND,
} from "@/lib/utils";
import { useUpdatePaidStatus } from "@/hooks/useOrder";
import useCartStore from "@/stores/cartStore";

const OrderStatus = () => {
  const navigate = useNavigate();
  let [searchParams, _] =
    useSearchParams();
  if (!searchParams.get("status")) {
    return;
  }
  const status =
    searchParams.get("status") ===
    "true"
      ? true
      : false;
  const orderId = searchParams.get(
    "vnp_OrderInfo"
  );
  const orderDate = searchParams.get(
    "vnp_PayDate"
  );
  const orderAmount = searchParams.get(
    "vnp_Amount"
  );
  const transitionId = searchParams.get(
    "vnp_TransactionNo"
  );

  const paidMutation =
    useUpdatePaidStatus();
  const { clearCart } = useCartStore();

  useEffect(() => {
    const previousURL =
      document.referrer;
    if (
      status &&
      previousURL ===
        "https://sandbox.vnpayment.vn/"
    ) {
      const accessToken = JSON.parse(
        localStorage.getItem("token")
      ).accessToken;
      paidMutation.mutate(
        {
          accessToken,
          orderId,
        },
        {
          onSuccess: () => {
            clearCart();
          },
        }
      );
    } else {
      return navigate("/");
    }
  }, [status]);

  return (
    <div className="relative h-screen place-content-center">
      <Card className="w-full md:w-[450px] mx-auto flex justify-center flex-col items-center">
        <CardHeader>
          <CardTitle className="mx-auto">
            {status ? (
              <CircleCheck className="w-24 h-24 text-green-500" />
            ) : (
              <CircleX className="w-24 h-24 text-red-500" />
            )}
          </CardTitle>
          <CardDescription>
            {status
              ? "Payment Successfully!"
              : "Payment Unsuccessfully!"}
          </CardDescription>
        </CardHeader>
        <h2 className="text-2xl py-2">
          {status &&
            "Order Information"}
        </h2>
        {status && (
          <CardContent className="table w-full text-sc">
            <div className="table-row-group">
              <div className="table-row">
                <div className="table-cell">
                  Transaction ID:
                </div>
                <div className="table-cell text-base text-main">
                  {transitionId}
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell">
                  Date:
                </div>
                <div className="table-cell text-base text-main">
                  {convertToDate(
                    orderDate
                  )}
                </div>
              </div>
              <div className="table-row">
                <div className="table-cell">
                  Amount:
                </div>
                <div className="table-cell text-base text-main">
                  {formatCurrencyVND(
                    orderAmount
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        )}
        <CardFooter className="flex justify-between gap-2">
          <Button variant="outline">
            Orders History
          </Button>
          <Button>
            <Link to={"/product"}>
              Continue Shopping
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <div className="absolute top-0 left-1/2 -translate-x-1/2">
        <dotlottie-player
          src="https://lottie.host/e48ee5d9-b006-445b-93d4-32db880157a8/zcnQoCCrNC.json"
          background="transparent"
          speed="1"
          style={{
            width: "500px",
            height: "500px",
          }}
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
};

export default OrderStatus;
