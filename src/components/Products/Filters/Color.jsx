import React, {
  useEffect,
} from "react";
import FilterContainer from "./Container";
import { Checkbox } from "@/components/ui/checkbox";
import { v4 } from "uuid";
import {
  useSearchParams,
  useNavigate,
} from "react-router-dom";

const FilterByColor = () => {
  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams();
  const navigate = useNavigate();

  const colors = [
    {
      name: "red",
      border: "border-red-500",
      bg: "bg-red-500",
      checked:
        "data-[state=checked]:bg-red-500",
    },
    {
      name: "blue",
      border: "border-blue-500",
      bg: "bg-blue-500",
      checked:
        "data-[state=checked]:bg-blue-500",
    },
    {
      name: "yellow",
      border: "border-yellow-500",
      bg: "bg-yellow-500",
      checked:
        "data-[state=checked]:bg-yellow-500",
    },
  ];

  const checkedColors = [];
  const updateColorFilter = (
    color,
    checked
  ) => {
    if (checked === "unchecked") {
      if (!checkedColors.includes()) {
        checkedColors.push(color);
      }
    } else {
      checkedColors.pop(color);
    }
    console.log(checkedColors);
  };

  return (
    <FilterContainer name={"Color"}>
      <div className="text-mainForeground flex gap-2 text-sc font-normal leading-8 my-5">
        {colors.map((color) => {
          return (
            <Checkbox
              onClick={(e) => {
                updateColorFilter(
                  color.name,
                  e.target.getAttribute(
                    "data-state"
                  )
                );
              }}
              key={v4()}
              id={color.name}
              className={`${color.border} ${color.bg} w-6 h-6 border-4 ${color.checked}`}
            />
          );
        })}
      </div>
    </FilterContainer>
  );
};

export default FilterByColor;
