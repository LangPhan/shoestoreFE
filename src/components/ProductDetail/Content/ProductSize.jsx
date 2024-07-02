import React, { Fragment } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { v4 } from "uuid";

const ProductSize = ({
  handleShoeSizeChange,
  shoeSize,
  shoeColor,
  shoeSizeList,
  ...rest
}) => {
  return (
    <Fragment>
      <div className="mb-5 font-medium product-size">
        <div className="flex items-center justify-between mb-3 text-lg">
          <span className="font-bold text-black ">Select Size</span>
          <span className="p-0 leading-none border-b-[1px] cursor-pointer border-mainForeground">
            Size Guides
          </span>
        </div>
        <RadioGroup
          className="flex items-center gap-3 text-lg"
          // onValueChange={handleShoeSizeChange(shoeSize)}
        >
          {shoeSizeList[shoeColor]?.map((item) => (
            <div className="flex items-center" key={v4()}>
              <RadioGroupItem
                value={item.size}
                id={item.size}
                checked={shoeSize === item.size}
                disabled={!item.isAvailable}
                className="hidden"
                onClick={handleShoeSizeChange}
              />
              <Label
                htmlFor={item.size}
                className={`flex items-center justify-center rounded-full w-12 h-12 border-[1px] text-lg font-medium 
                ${
                  shoeSize === item.size
                    ? "border-main text-black font-bold"
                    : "border-mainForeground text-mainForeground"
                } ${
                  item.isAvailable
                    ? "cursor-pointer"
                    : "cursor-not-allowed bg-gray-200"
                }`}
              >
                {item.size}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </Fragment>
  );
};

export default ProductSize;
