import { getOrderDetail } from "@/api";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { convertConcurrency } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Separator,
} from "@radix-ui/react-dropdown-menu";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  MoreVertical,
  Truck,
} from "lucide-react";
import React, { Fragment, useEffect, useState } from "react";
import { v4 } from "uuid";

const OrderDetail = ({ orderId }) => {
  const accessToken = JSON.parse(localStorage.getItem("token")).accessToken;
  const [order, setOrder] = useState({});
  let createDate = "";

  useEffect(() => {
    handleGetOrderDetail();
  }, [orderId]);

  const handleGetOrderDetail = async () => {
    const result = await getOrderDetail({ accessToken, orderId });
    createDate = `Date: ${result.createDate[2]}/${result.createDate[1]}/${result.createDate[0]}`;
    setOrder({ ...result, createDate });
  };

  return (
    <Fragment>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
        <CardHeader className="flex flex-row items-start bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="flex items-center gap-2 text-lg group">
              {`Order ${order.id}`}
              <Button
                size="icon"
                variant="outline"
                className="w-6 h-6 transition-opacity opacity-0 group-hover:opacity-100"
              >
                <Copy className="w-3 h-3" />
                <span className="sr-only">Copy Order ID</span>
              </Button>
            </CardTitle>
            <CardDescription>{order.createDate}</CardDescription>
          </div>
          <div className="flex items-center gap-1 ml-auto">
            <Button size="sm" variant="outline" className="h-8 gap-1">
              <Truck className="h-3.5 w-3.5" />
              <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                {order.orderStatus}
              </span>
            </Button>
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" className="w-8 h-8">
                  <MoreVertical className="h-3.5 w-3.5" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Export</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Trash</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Order Details</div>
            <ul className="grid gap-3">
              {order &&
                order.orderDetails &&
                order.orderDetails.map((item) => {
                  let amount =
                    Number(item.product.price) * Number(item.quantity);
                  return (
                    <li
                      className="flex items-center justify-between"
                      key={v4()}
                    >
                      <span className="text-muted-foreground">
                        {item.product.name} <span>x {item.quantity}</span>
                      </span>
                      <span>{convertConcurrency(amount)}</span>
                    </li>
                  );
                })}
              {/* <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Glimmer Lamps x <span>2</span>
                </span>
                <span>$250.00</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Aqua Filters x <span>1</span>
                </span>
                <span>$49.00</span>
              </li> */}
            </ul>
            <Separator className="my-2" />
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{convertConcurrency(order.total)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{convertConcurrency(order.shippingFee)}</span>
              </li>
              {/* <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>$25.00</span>
              </li> */}
              <li className="flex items-center justify-between font-semibold">
                <span className="text-muted-foreground">Total</span>
                <span>
                  {convertConcurrency(order.total + order.shippingFee)}
                </span>
              </li>
            </ul>
          </div>
          <Separator className="my-4" />
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <div className="font-semibold">Shipping Information</div>
              <address className="grid gap-0.5 not-italic text-muted-foreground">
                {/* <span>Liam Johnson</span>
                <span>1234 Main St.</span>
                <span>Anytown, CA 12345</span> */}
                <span>{order.addressLine}</span>
              </address>
            </div>
            <div className="grid gap-3 auto-rows-max">
              <div className="font-semibold">Billing Information</div>
              <div className="text-muted-foreground">
                Same as shipping address
              </div>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Customer Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Customer</dt>
                <dd>{order?.user?.username}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Email</dt>
                <dd>
                  <a href="mailto:">{order?.user?.email}</a>
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Phone</dt>
                <dd>
                  <a href="tel:">{order?.phoneNumber}</a>
                </dd>
              </div>
            </dl>
          </div>
          <Separator className="my-4" />
          <div className="grid gap-3">
            <div className="font-semibold">Payment Information</div>
            <dl className="grid gap-3">
              <div className="flex items-center justify-between">
                <dt className="flex items-center gap-1 text-muted-foreground">
                  <CreditCard className="w-4 h-4" />
                  Visa
                </dt>
                <dd>**** **** **** 4532</dd>
              </div>
            </dl>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center px-6 py-3 border-t bg-muted/50">
          <div className="text-xs text-muted-foreground">
            Updated <time dateTime="2023-11-23">{order.createDate}</time>
          </div>
          <Pagination className="w-auto ml-auto mr-0">
            <PaginationContent>
              <PaginationItem>
                <Button size="icon" variant="outline" className="w-6 h-6">
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span className="sr-only">Previous Order</span>
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button size="icon" variant="outline" className="w-6 h-6">
                  <ChevronRight className="h-3.5 w-3.5" />
                  <span className="sr-only">Next Order</span>
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </Fragment>
  );
};

export default OrderDetail;
