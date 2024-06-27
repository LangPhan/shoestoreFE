import { ShoppingCart } from "lucide-react";
import { ModeToggle } from "../mode-toggle";
import useCartStore from "@/stores/cartStore";

const Tool = () => {
  const { totalItems } = useCartStore((state) => state);
  return (
    <div className="flex items-center justify-between gap-5">
      <div className="relative hover:cursor-pointer">
        <ShoppingCart />
        <div className="absolute -top-2 -right-3 w-5 h-5 bg-red-600 text-white text-[6px] rounded-full flex justify-center items-center">
          <span className="text-xs text-center">{Number(totalItems)}</span>
        </div>
      </div>
      <ModeToggle />
    </div>
  );
};

export default Tool;
1;
