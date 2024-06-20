import { ShoppingCart } from "lucide-react";
import { ModeToggle } from "../mode-toggle";

const Tool = () => {
  return (
    <div className="flex justify-between items-center gap-5">
      <div className="relative hover:cursor-pointer">
        <ShoppingCart />
        <div className="absolute -top-2 -right-3 w-5 h-5 bg-red-600 text-white text-[6px] rounded-full flex justify-center items-center">
          <span className="text-center text-xs">
            1
          </span>
        </div>
      </div>
      <ModeToggle />
    </div>
  );
};

export default Tool;
1;
