import React from "react";
import FilterContainer from "./Container";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const FilterByColor = () => {
  const colors = [
    {
      name: "red",
      text: "text-red-500",
      border: "border-red-500",
    },
    {
      name: "blue",
      text: "text-blue-500",
      border: "border-blue-500",
    },
    {
      name: "yellow",
      text: "text-yellow-500",
      border: "border-yellow-500",
    },
  ];
  return (
    <FilterContainer name={"Color"}>
      <ul className="text-mainForeground text-sc font-normal leading-8">
        {colors.map((color, index) => {
          return (
            <li
              key={index}
              className="flex items-center py-1"
            >
              <Checkbox
                className={`${color.border}`}
                id={color.name}
              />
              <Label
                htmlFor={color.name}
                className={`text-[16px] ${color.text} translate-y-[1px] pl-5 capitalize font-bold`}
              >
                {color.name}
              </Label>
            </li>
          );
        })}
      </ul>
    </FilterContainer>
  );
};

export default FilterByColor;
