import React, { Fragment } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { v4 } from "uuid";

const ProductColor = ({
  handleShoeColorChange,
  shoeColor,
  shoeColorList,
  ...rest
}) => {
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
          {shoeColorList?.map((item) => (
            <div className="flex items-center cursor-pointer" key={v4()}>
              <RadioGroupItem
                value={item}
                id={item}
                checked={shoeColor === item}
                className="hidden"
              />
              <Label
                htmlFor={item}
                className={`flex items-center justify-center rounded-full w-6 h-6 border-2  font-semibold cursor-pointer ${
                  shoeColor === item ? "shadow-color opacity-100" : "opacity-50"
                }`}
                style={{ backgroundColor: item }}
              ></Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </Fragment>
  );
};

export default ProductColor;
