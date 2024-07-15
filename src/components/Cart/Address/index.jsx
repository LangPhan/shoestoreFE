import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import authStore from "@/stores/authStore";
import { SendHorizonal } from "lucide-react";
import { Link } from "react-router-dom";

const CartAddress = () => {
  const { user } = authStore();
  return (
    <div className="grid gap-4 max-w-[500px] mx-auto">
      <div className="grid gap-2">
        <Label htmlFor="fullName">
          FullName
        </Label>
        <Input
          value={user?.username}
          id="fullName"
          type="text"
          disabled
        />
      </div>{" "}
      <div className="grid gap-2">
        <Label htmlFor="email">
          Email
        </Label>
        <Input
          value={user?.email}
          id="email"
          type="email"
          disabled
        />
      </div>{" "}
      <div className="grid gap-2">
        <Label htmlFor="phone">
          Phone
        </Label>
        <Input
          value={user?.phoneNumber}
          id="fullName"
          type="text"
          disabled
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="address">
          Address
        </Label>
        <Input
          value={user?.addressLine}
          id="address"
          type="text"
          disabled
        />
      </div>
      <Button
        type="submit"
        className="w-full"
        asChild
      >
        <Link
          to={"/cart/payment"}
          state={{ name: "Payment" }}
        >
          Payment
          <SendHorizonal className="ml-2" />
        </Link>
      </Button>
    </div>
  );
};

export default CartAddress;
