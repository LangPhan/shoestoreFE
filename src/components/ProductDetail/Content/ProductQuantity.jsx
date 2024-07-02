import { Minus, Plus } from "lucide-react";
import React, { Fragment } from "react";

const ProductQuantity = ({
  quantity,
  onQuantityIncrement,
  onQuantityDecrement,
  ...rest
}) => {
  return (
    <Fragment>
      <div className="flex items-center gap-5 mb-8 text-2xl quantity text-mainForeground product-quantity">
        <span className="font-semibold">Qty</span>
        <div className="flex items-center gap-2 font-medium">
          <button
            className="w-8 h-8 border-[1px] rounded-full text-xs flex items-center justify-center cursor-pointer"
            onClick={onQuantityDecrement(quantity)}
          >
            <Minus />
          </button>
          <span className="flex items-center justify-center w-16 h-8 font-semibold rounded-xl border-[1px]">
            {quantity}
          </span>
          <button
            className="w-8 h-8 border-[1px] rounded-full text-xs flex items-center justify-center cursor-pointer"
            onClick={onQuantityIncrement(quantity)}
          >
            <Plus />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductQuantity;
