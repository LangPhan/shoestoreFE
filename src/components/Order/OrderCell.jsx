import OrderStatus from "./OrderStatus";
import {
  ChevronsUpDown,
  Plus,
  X,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { Button } from "../ui/button";
import CardItem from "../Cart/CartDetail/CardItem";
import { convertConcurrency } from "@/lib/utils";
import { v4 } from "uuid";
const OrderCell = ({ order }) => {
  const [isOpen, setIsOpen] =
    useState(false);
  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full border-[2px] border-main rounded-xl px-4 py-2 my-5 shadow-md"
    >
      <div className="table w-full">
        <div className="table-header-group">
          <div className="table-row font-bold text-md text-mainForeground">
            <div className="table-cell text-center">
              Order ID
            </div>
            <div className="table-cell text-center">
              Time
            </div>
            <div className="table-cell text-center">
              Order Status
            </div>
            <div className="table-cell text-center">
              Payment
            </div>
          </div>
        </div>
        <div className="table-row-group">
          <div className="table-row text-sm">
            <div className="table-cell text-center py-2">
              {order.id.split("-")[0]}
            </div>
            <div className="table-cell text-center py-2">
              {order.createDate[2] +
                "-" +
                order.createDate[1] +
                "-" +
                order.createDate[0]}
            </div>
            <div className="table-cell text-center py-2">
              <OrderStatus
                status={
                  order.orderStatus
                }
              />
            </div>
            <div className="table-cell text-center py-2">
              {order.onlinePayment
                ? "Online"
                : "Cash"}
            </div>
          </div>
        </div>
      </div>
      <CollapsibleTrigger asChild>
        <div className="w-full flex justify-between items-center">
          <p className="text-main font-semibold text-sm italic">
            {"Total: " +
              convertConcurrency(
                order.total
              )}
          </p>
          <Button variant="ghost">
            Show order detail{" "}
            <ChevronsUpDown className="ml-2" />
          </Button>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="w-full">
        {order?.orderDetails.map(
          (item) => {
            return (
              <CardItem
                key={v4()}
                isOrder={true}
                id={item.id}
                name={item.product.name}
                color={
                  item.product.color
                }
                image={
                  item.product.imgLink
                }
                price={
                  item.product.price
                }
                quantity={item.quantity}
                size={item.product.size}
                total={
                  item.product.price *
                  item.quantity
                }
              />
            );
          }
        )}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default OrderCell;
