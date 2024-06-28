import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ShoppingCart,
  Star,
} from "lucide-react";
import { memo } from "react";

const ProductHorizontalCard = ({
  name,
  price,
  sale,
  image,
  description,
}) => {
  return (
    <div className="h-fit border-[1px] border-slate-200 hover:border-main hover:bg-secondary transition-all rounded-xl flex gap-4 py-4 px-3">
      <div className="w-1/3 h-full flex justify-center items-center">
        <div className="relative w-[250px] aspect-square">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={name}
          />
          <Badge
            className="absolute top-2 left-2 py-2 text-main"
            variant={"outline"}
          >
            {"Sale " + sale + "%"}
          </Badge>
        </div>
      </div>
      <div className="w-2/3 full">
        <p className="text-2xl font-bold">
          {name}
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
        <p className="my-5 max-h-[80px] min-h-[80px] max-w-[500px] text-mc truncate text-wrap">
          {description}
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

export default memo(
  ProductHorizontalCard
);
