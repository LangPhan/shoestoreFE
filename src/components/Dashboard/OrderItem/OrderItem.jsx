import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { convertConcurrency } from "@/lib/utils";
import { Fragment } from "react";

const OrderItem = ({ order, handleOrderDetail, ...props }) => {
  const {
    id: orderId,
    user: { username, email },
    orderStatus,
    createDate,
    total,
    shippingFee,
  } = order;
  let orderAmount = Number(total) + Number(shippingFee);
  let createdDate = `${createDate[2]}/${createDate[1]}/${createDate[0]}`;

  return (
    <Fragment>
      <TableRow
        className="cursor-pointer"
        onClick={() => handleOrderDetail(orderId)}
      >
        <TableCell>
          <div className="font-medium">{username}</div>
          <div className="hidden text-sm text-muted-foreground md:inline">
            {email}
          </div>
        </TableCell>
        <TableCell className="hidden sm:table-cell">Sales</TableCell>
        <TableCell className="hidden sm:table-cell">
          <Badge className="text-xs" variant="outline">
            {orderStatus}
          </Badge>
        </TableCell>
        <TableCell className="hidden md:table-cell">{createdDate}</TableCell>
        <TableCell className="text-right">
          {convertConcurrency(orderAmount)}
        </TableCell>
      </TableRow>
    </Fragment>
  );
};

export default OrderItem;
