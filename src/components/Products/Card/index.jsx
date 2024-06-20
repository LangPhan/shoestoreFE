import { Badge } from "@/components/ui/badge";
import {
  PackagePlus,
  Star,
} from "lucide-react";
import { memo } from "react";

const ProductCard = memo(() => {
  return (
    <div className="group relative flex flex-col gap-2 rounded-t-2xl hover:border-main hover:border-[1px] transition-all">
      <div className="group/cart absolute hidden group-hover:block transition-all top-3 right-3 z-10 w-fit h-fit px-3 py-3 rounded-full hover:cursor-pointer hover:bg-slate-200">
        <PackagePlus className="text-main" />
        <div className="hidden group-hover/cart:block transition-all absolute bg-slate-100 px-1 py-2 right-[100%] top-[50%] -translate-y-[50%] w-[120px] text-center rounded-3xl text-main">
          Add to Cart
        </div>
      </div>
      <div className="relative rounded-2xl">
        <Badge
          className="absolute top-2 left-2 py-2 text-main"
          variant={"outline"}
        >
          Sale 100%
        </Badge>
        <img
          className="rounded-t-2xl"
          src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png"
          alt="Nike ne"
        />
      </div>
      <div className="group-hover:px-2 transition-all">
        <div className="flex justify-between text-mainForeground">
          <p className="text-mc">
            Jordan Sneaker
          </p>
          <span className="flex gap-1 items-center">
            <Star className="fill-main w-4 text-main" />
            <p className="text-tc">
              (8.6k)
            </p>
          </span>
        </div>
        <span className="text-mc font-bold">
          $20.00
        </span>
      </div>
    </div>
  );
});

export default ProductCard;
