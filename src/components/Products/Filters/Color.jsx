import React from "react";
import FilterContainer from "./Container";
import { Checkbox } from "@/components/ui/checkbox";
import { v4 } from "uuid";
import useProductStore from "@/stores/productStore";

const FilterByColor = () => {
  // const convertColor = (
  //   property,
  //   color
  // ) => {
  //   return `${property}-${color}-500`;
  // };
  const colors = [
    {
      name: "red",
      border: "border-red-500",
      bg: "bg-red-500",
    },
    {
      name: "blue",
      border: "border-blue-500",
      bg: "bg-blue-500",
    },
    {
      name: "yellow",
      border: "border-yellow-500",
      bg: "bg-yellow-500",
    },
  ];

  const { setUrl } = useProductStore();

  return (
    <FilterContainer name={"Color"}>
      <div className="text-mainForeground flex gap-2 text-sc font-normal leading-8 my-5">
        {colors.map((color) => {
          return (
            <Checkbox
              key={v4()}
              className={`${color.border} ${color.bg} w-6 h-6 border-4 data-[state=checked]:bg-main `}
              onClick={() =>
                setUrl(
                  "/products?sortBy=title&order=asc"
                )
              }
            />
          );
        })}
      </div>
    </FilterContainer>
  );
};

export default FilterByColor;
