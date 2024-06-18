import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="flex flex-col gap-2 rounded-2xl hover:border-main hover:border-[1px] hover:px-2 hover:py-2 transition-all">
      <div className="relative rounded-2xl">
        <Badge
          className="absolute top-2 left-2 py-2 text-main"
          variant={"outline"}
        >
          Sale 100%
        </Badge>
        <img
          className="rounded-2xl"
          src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png"
          alt="Nike ne"
        />
      </div>
      <div className="flex justify-between text-mainForeground">
        <p className="text-mc">
          Jordan Sneaker
        </p>
        <span className="flex">
          <Star className="fill-yellow-400 text-yellow-400" />
          <p className="text-sc">
            (8.6k)
          </p>
        </span>
      </div>
      <span className="text-mc font-bold">
        $20.00
      </span>
    </div>
  );
};

export default ProductCard;
