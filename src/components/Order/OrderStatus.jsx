import { Badge } from "../ui/badge";

const OrderStatus = ({ status }) => {
  switch (status) {
    case "RECEIVED":
      return (
        <Badge
          className="text-white bg-yellow-500"
          variant="outline"
        >
          {status}
        </Badge>
      );
    case "TO_SHIP":
      return (
        <Badge
          className="text-white bg-blue-500"
          variant="outline"
        >
          {status}
        </Badge>
      );
    case "CANCEL":
      return (
        <Badge
          className="text-white bg-red-500 border-red-500"
          variant="outline"
        >
          {status}
        </Badge>
      );
    default:
      return (
        <Badge
          className="text-white bg-green-500"
          variant="outline"
        >
          {status}
        </Badge>
      );
  }
};

export default OrderStatus;
