import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { convertConcurrency } from "@/lib/utils";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import {
  PackagePlus,
  Star,
} from "lucide-react";
import { memo } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = memo(
  ({
    name,
    price,
    sale,
    image,
    categoryId,
  }) => {
    const navigate = useNavigate();
    return (
      <div
        className="w-full overflow-hidden h-full group relative flex flex-col gap-2 rounded-t-2xl hover:border-main hover:border-[1px] transition-all duration-100 md:px-0 cursor-pointer"
        onClick={() =>
          navigate(
            `/product-detail/${name}/${categoryId}`
          )
        }
      >
        <div className="absolute z-10 px-3 py-3 transition-all rounded-full group/cart md:hidden group-hover:block top-3 right-3 w-fit h-fit hover:cursor-pointer group-hover:bg-slate-200">
          <PackagePlus className="text-main" />
          <div className="hidden group-hover/cart:block transition-all absolute bg-slate-100 px-1 py-2 right-[100%] top-[50%] -translate-y-[50%] w-[120px] text-center rounded-3xl text-main select-none">
            Add to Cart
          </div>
        </div>
        <div className="relative rounded-2xl aspect-square">
          <Badge
            className={`${
              sale === 0 && "hidden"
            } absolute top-2 left-2 py-2 text-main z-20 bg-background`}
            variant={"outline"}
          >
            {`Sale ${sale} %`}
          </Badge>
          <img
            className="absolute inset-0 object-cover w-full h-full rounded-t-2xl dark:opacity-80"
            loading="lazy"
            src={image}
            alt={name}
          />
        </div>
        <div className="transition-all duration-500 group-hover:scale-95 ">
          <div className="flex justify-between text-mainForeground">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <p className="text-mc max-w-[250px] sm:max-w-[140px] md:max-w-[120px] lg:max-w-[220px] max-h-[50px] truncate">
                    {name}
                  </p>
                </TooltipTrigger>
                <TooltipContent className="max-w-[220px]">
                  {name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <span className="flex items-center gap-1">
              <Star className="w-4 fill-main text-main" />
              <p className="text-tc">
                (8.6k)
              </p>
            </span>
          </div>
          <span className="font-bold text-mc">
            {convertConcurrency(price)}
          </span>
        </div>
      </div>
    );
  }
);

export default ProductCard;
