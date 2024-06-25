import React, { Fragment } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ProductSize = ({ handleShoeSizeChange, shoeSize, ...rest }) => {
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
          className="flex items-center gap-3 text-lg cursor-pointer"
          onValueChange={handleShoeSizeChange(shoeSize)}
        >
          <div className="flex items-center cursor-pointer">
            <RadioGroupItem
              value="30"
              id="option-one"
              checked={shoeSize === "30"}
              className="hidden"
            />
            <Label
              htmlFor="option-one"
              className={`flex items-center justify-center rounded-full w-12 h-12 border-[1px] text-lg font-medium cursor-pointer ${
                shoeSize === "30"
                  ? "border-main text-black font-bold"
                  : "border-mainForeground text-mainForeground"
              }`}
            >
              30
            </Label>
          </div>
          <div className="flex items-center cursor-pointer">
            <RadioGroupItem
              value="32"
              id="option-two"
              checked={shoeSize === "32"}
              className="hidden"
            />
            <Label
              htmlFor="option-two"
              className={`flex items-center justify-center rounded-full w-12 h-12 border-[1px] text-lg font-medium cursor-pointer ${
                shoeSize === "32"
                  ? "border-main text-black font-bold"
                  : "border-mainForeground text-mainForeground cursor-not-allowed bg-gray-200"
              }`}
            >
              32
            </Label>
          </div>
          <div className="flex items-center cursor-pointer">
            <RadioGroupItem
              value="34"
              id="option-three"
              checked={shoeSize === "34"}
              className="hidden"
            />
            <Label
              htmlFor="option-three"
              className={`flex items-center justify-center rounded-full w-12 h-12 border-[1px] text-lg font-medium cursor-pointer ${
                shoeSize === "34"
                  ? "border-main text-black font-bold"
                  : "border-mainForeground text-mainForeground"
              }`}
            >
              34
            </Label>
          </div>
        </RadioGroup>
      </div>
    </Fragment>
  );
};

export default ProductSize;
