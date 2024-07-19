import { Badge } from "../ui/badge";

const OrderStatus = ({ status }) => {
  if (status === "RECEIVED") {
    return (
      <Badge
        className={
          "text-main border-main"
        }
        variant={"outline"}
      >
        {status}
      </Badge>
    );
  } else if (status === "TO_SHIP") {
    return (
      <Badge
        className={
          "text-blue-500 border-blue-500"
        }
        variant={"outline"}
      >
        {status}
      </Badge>
    );
  } else {
    return (
      <Badge
        className={
          "text-green-500 border-green-500"
        }
        variant={"outline"}
      >
        {status}
      </Badge>
    );
  }
};

export default OrderStatus;
