import { Badge } from "@/components/ui/badge";
import { covertConcurrency } from "@/lib/utils";
import {
  PackagePlus,
  Star,
} from "lucide-react";
import { memo } from "react";

const ProductCard = memo(
  ({ name, price, sale, image }) => {
    return (
      <div className="group relative flex flex-col gap-2 rounded-t-2xl hover:border-main hover:border-[1px] transition-all duration-100 px-14 md:px-0">
        <div className="group/cart absolute hidden group-hover:block transition-all top-3 right-3 z-10 w-fit h-fit px-3 py-3 rounded-full hover:cursor-pointer hover:bg-slate-200">
          <PackagePlus className="text-main" />
          <div className="hidden group-hover/cart:block transition-all absolute bg-slate-100 px-1 py-2 right-[100%] top-[50%] -translate-y-[50%] w-[120px] text-center rounded-3xl text-main">
            Add to Cart
          </div>
        </div>
        <div className="relative rounded-2xl aspect-square">
          <Badge
            className={`${
              sale === 0 && "hidden"
            } absolute top-2 left-2 py-2 text-main z-20`}
            variant={"outline"}
          >
            {`Sale ${sale} %`}
          </Badge>
          <img
            className="rounded-t-2xl absolute inset-0 w-full h-full object-contain"
            loading="lazy"
            src={image}
            alt={name}
          />
        </div>
        <div className="group-hover:px-2 transition-all duration-500">
          <div className="flex justify-between text-mainForeground">
            <p className="text-mc max-w-[220px]">
              {name}
            </p>
            <span className="flex gap-1 items-center">
              <Star className="fill-main w-4 text-main" />
              <p className="text-tc">
                (8.6k)
              </p>
            </span>
          </div>
          <span className="text-mc font-bold">
            {covertConcurrency(price)}
          </span>
        </div>
      </div>
    );
  }
);

export default ProductCard;
