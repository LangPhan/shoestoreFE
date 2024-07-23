import { Badge } from "../ui/badge";

const OrderStatus = ({ status }) => {
  switch (status) {
    case "RECEIVED":
      return (
        <Badge
          className="px-4 font-semibold py-1 text-white bg-yellow-500"
          variant="outline"
        >
          {status}
        </Badge>
      );
    case "TO_SHIP":
      return (
        <Badge
          className="px-4 font-semibold py-1 text-white bg-blue-500"
          variant="outline"
        >
          {status}
        </Badge>
      );
    case "CANCEL":
      return (
        <Badge
          className="px-4 font-semibold py-1 text-white bg-red-500 border-red-500"
          variant="outline"
        >
          {status}
        </Badge>
      );
    default:
      return (
        <Badge
          className="px-4 font-semibold py-1 text-white bg-green-500"
          variant="outline"
        >
          {status}
        </Badge>
      );
  }
};

export default OrderStatus;
