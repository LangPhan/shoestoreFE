import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { convertConcurrency } from "@/lib/utils";
import useCartStore from "@/stores/cartStore";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const CardItem = ({
  id,
  name,
  image,
  color,
  size,
  price,
  quantity,
  total,
  categoryId,
  isOrder = false,
}) => {
  const navigate = useNavigate();
  const {
    changeProductQuantity,
    removeProduct,
  } = useCartStore();
  return (
    <div className="col relative font-bold w-full border-[1px] rounded-lg border-slate-200 text-xs md:text-base min-h-[90px]">
      <Dialog>
        <DialogTrigger
          className={`${
            isOrder && "hidden"
          }`}
          asChild
        >
          <div className="absolute w-6 h-6 flex items-center justify-center right-1 top-1 hover:bg-red-500 hover:rounded-full hover:cursor-pointer transition-all group">
            <X className="w-4 h-4 font-bold text-mainForeground group-hover:text-white" />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Are you sure?
            </DialogTitle>
            <DialogDescription className="text-lg py-2">
              {"Remove "}
              <b className="text-main">
                {name}
              </b>
              {" from your cart"}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-end">
            <DialogClose asChild>
              <Button
                type="button"
                className="bg-red-400 hover:bg-red-500 dark:text-white"
                onClick={() => {
                  removeProduct(id);
                  toast.success(
                    "Remove item successfully!"
                  );
                }}
              >
                Remove
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="col-span-2 flex items-center gap-2 max-w-full">
        <img
          className="w-1/3 rounded-lg aspect-square"
          draggable={false}
          src={image}
          alt={name}
        />
        <div className="w-2/3 space-y-1">
          <p
            className="hover:cursor-pointer hover:text-main whitespace-normal"
            title={name}
            onClick={() =>
              navigate(
                `/product-detail/${name}/${categoryId}`
              )
            }
          >
            {name}
          </p>

          <p className="text-slate-300">
            Color-{" "}
            <span className="text-foreground">
              {color}
            </span>
          </p>
          <p className="text-slate-300">
            Size-{" "}
            <span className="text-foreground">
              {size}
            </span>
          </p>
        </div>
      </div>
      <div className="inline-flex items-center my-auto text-main max-w-full">
        <p className="w-full whitespace-normal">
          {convertConcurrency(price)}
        </p>
        <span className="font-normal text-foreground text-xs line-through mx-1 hidden md:block">
          $140
        </span>
      </div>
      <div className="my-auto flex flex-col-reverse justify-center sm:flex-row items-center gap-2 md:space-x-1">
        <Button
          variant="ghost"
          className="h-2 w-2 disabled:opacity-20"
          onClick={() =>
            changeProductQuantity(
              "DECREASE",
              id
            )
          }
          disabled={
            quantity === 1 || isOrder
          }
        >
          -
        </Button>
        <span>{quantity}</span>
        <Button
          variant="ghost"
          className="h-2 w-2"
          disabled={isOrder}
          onClick={() =>
            changeProductQuantity(
              "INCREASE",
              id
            )
          }
        >
          +
        </Button>
      </div>
      <div className="max-w-full w-full flex items-center">
        <p className="w-full text-center whitespace-normal truncate">
          {convertConcurrency(total)}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
