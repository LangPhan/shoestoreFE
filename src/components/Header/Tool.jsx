import {
  AlignJustify,
  ShoppingCart,
} from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import useCartStore from "@/stores/cartStore";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavMobile from "./NavMobile";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Profile from "./Profile";

const Tool = () => {
  const { totalItems, calcCartTotal } =
    useCartStore((state) => state);

  useEffect(() => {
    calcCartTotal();
  }, []);
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="relative hover:cursor-pointer">
        <Link to={"/cart"}>
          <ShoppingCart />
          <div className="absolute -top-2 -right-3 w-5 h-5 bg-red-600 text-white text-[6px] rounded-full flex justify-center items-center">
            <span className="text-xs text-center">
              {Number(totalItems)}
            </span>
          </div>
        </Link>
      </div>
      <ModeToggle />
      <Sheet>
        <SheetTrigger>
          <AlignJustify className="md:hidden" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="my-4">
              <Logo />
            </div>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <NavMobile />
        </SheetContent>
      </Sheet>
      <Profile isShow={false} />
    </div>
  );
};

export default Tool;
1;
