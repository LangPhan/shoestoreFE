import React from "react";
import FilterContainer from "./Container";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const FilterByColor = () => {
  const colors = [
    {
      name: "Red",
      color: "red-500",
    },
    {
      name: "Blue",
      color: "blue-500",
    },
  ];
  return (
    <FilterContainer name={"Color"}>
      <ul className="text-mainForeground text-sc font-normal leading-8">
        {colors.map((color, index) => {
          return (
            <li
              key={index}
              className="flex items-center"
            >
              <Checkbox
                id="s"
                className="border-mainForeground"
              />

              <Label
                htmlFor="s"
                className="text-[16px] translate-y-[1px] pl-5 uppercase"
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
