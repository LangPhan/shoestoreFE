import React, { Fragment } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ProductColor = ({ handleShoeColorChange, shoeColor, ...rest }) => {
  return (
    <Fragment>
      <div className="ml-[-2px] mb-5 font-medium product-color">
        <div className="flex items-center justify-between mb-3 text-lg">
          <span className="font-bold text-black ">Select Color</span>
        </div>
        <RadioGroup
          className="flex items-center gap-2 text-lg cursor-pointer"
          onValueChange={handleShoeColorChange(shoeColor)}
        >
          <div className="flex items-center cursor-pointer">
            <RadioGroupItem
              value="black"
              id="black"
              checked={shoeColor === "black"}
              className="hidden"
            />
            <Label
              htmlFor="black"
              className={`flex items-center justify-center rounded-full w-6 h-6 border-2  font-semibold cursor-pointer bg-black ${
                shoeColor === "black"
                  ? "shadow-color opacity-100"
                  : "opacity-50"
              }`}
            ></Label>
          </div>
          <div className="flex items-center cursor-pointer">
            <RadioGroupItem
              value="blue"
              id="blue"
              checked={shoeColor === "blue"}
              className="hidden"
            />
            <Label
              htmlFor="blue"
              className={`flex items-center justify-center rounded-full w-6 h-6 border-2  font-semibold cursor-pointer bg-blue-800 ${
                shoeColor === "blue" ? "shadow-color opacity-100" : "opacity-50"
              }`}
            ></Label>
          </div>
          <div className="flex items-center cursor-pointer">
            <RadioGroupItem
              value="green"
              id="green"
              checked={shoeColor === "green"}
              className="hidden"
            />
            <Label
              htmlFor="green"
              className={`flex items-center justify-center rounded-full w-6 h-6 border-2  font-semibold cursor-pointer bg-green-800 ${
                shoeColor === "green"
                  ? "shadow-color opacity-100"
                  : "opacity-50"
              }`}
            ></Label>
          </div>
        </RadioGroup>
      </div>
    </Fragment>
  );
};

export default ProductColor;
