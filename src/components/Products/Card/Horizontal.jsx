import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ShoppingCart,
  Star,
} from "lucide-react";

const ProductHorizontalCard = () => {
  return (
    <div className="h-fit border-[1px] border-slate-200 hover:border-main hover:bg-secondary transition-all rounded-xl flex gap-4 py-4 px-3">
      <div className="w-1/3 h-full flex justify-center items-center">
        <div className="relative w-[250px] aspect-square">
          <img
            className="object-fill"
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fdded470-0ac5-4bd7-b41b-1bb63e161438/custom-nike-air-force-1-mid-by-you-shoes.png"
            alt="Shoe"
          />
          <Badge
            className="absolute top-2 left-2 py-2 text-main"
            variant={"outline"}
          >
            Sale 100%
          </Badge>
        </div>
      </div>
      <div className="w-2/3 full">
        <p className="text-2xl font-bold">
          Jordan Sneaker
        </p>
        <div className="flex my-5 gap-4 items-center">
          <div className="flex gap-1">
            <Star className="fill-main w-4 text-main" />
            <Star className="fill-main w-4 text-main" />
            <Star className="fill-main w-4 text-main" />
            <Star className="fill-main w-4 text-main" />
            <Star className="fill-slate-200 w-4 text-slate-200" />
          </div>
          <span className="text-mainForeground text-sc">
            1999 reviews
          </span>
        </div>
        <Separator />
        <p className="my-5 max-h-[80px] max-w-[500px] text-mc truncate text-wrap">
          Lorem, ipsum dolor sit amet
          consectetur adipisicing elit.
          Nobis blanditiis, consectetur
          nihil quam animi accusamus
          dicta libero sit nostrum in
          unde? Repudiandae, corporis
          reprehenderit dicta eveniet
          cupiditate consequatur tempore
          blanditiis.
        </p>
        <div>
          <Button className="font-bold">
            <ShoppingCart className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductHorizontalCard;
