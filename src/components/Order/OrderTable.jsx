import { useGetOrderByUser } from "@/hooks/useOrder";
import { scrollToRef } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import {
  useRef,
  useState,
} from "react";
import { v4 } from "uuid";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Skeleton } from "../ui/skeleton";
import OrderCell from "./OrderCell";
import OrderSkeleton from "./Skeleton";

const OrderTable = () => {
  const accessToken =
    JSON.parse(
      localStorage.getItem("token")
    )?.accessToken || "";
  const [pageNo, setPageNo] =
    useState(0);
  const { data: orderList, isLoading } =
    useGetOrderByUser({
      accessToken,
      pageNo,
    });
  const checkPointRef = useRef(null);
  console.log(orderList);
  return (
    <>
      <div
        className="flex justify-center my-10 text-xl font-semibold"
        ref={checkPointRef}
      >
        {!isLoading ? (
          <>
            {"Total order: " +
              orderList?.totalElements}
          </>
        ) : (
          <>
            <Skeleton
              className={
                "w-[426px] h-[28px]"
              }
            />
          </>
        )}
      </div>
      <ScrollArea className="mx-auto px-1 lg:px-5 lg:w-1/2 max-w-[600px] max-h-[800px] flex flex-col items-center mb-10 border-[1px] rounded-sm shadow-lg overscroll-none">
        {orderList &&
          orderList?.content?.map(
            (order) => {
              return (
                <OrderCell
                  key={v4()}
                  order={order}
                />
              );
            }
          )}
        {isLoading && <OrderSkeleton />}
        <div className="flex flex-row-reverse gap-2 my-2 min-h-[40px]">
          {!isLoading && orderList && (
            <>
              <Button
                variant="ghost"
                onClick={() => {
                  setPageNo(pageNo + 1);
                  scrollToRef(
                    checkPointRef
                  );
                }}
                disabled={
                  orderList?.last
                }
              >
                <ArrowRight />
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setPageNo(pageNo - 1);
                  scrollToRef(
                    checkPointRef
                  );
                }}
                disabled={
                  orderList?.first
                }
              >
                <ArrowLeft />
              </Button>
            </>
          )}
        </div>
      </ScrollArea>
    </>
  );
};

export default OrderTable;
