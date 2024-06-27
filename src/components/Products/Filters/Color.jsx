import FilterContainer from "./Container";
import { Checkbox } from "@/components/ui/checkbox";
import useProductStore from "@/stores/productStore";
import { v4 } from "uuid";

const FilterByColor = () => {
  const colors = [
    {
      name: "Red",
      border: "border-red-500",
      bg: "bg-red-500",
      checked:
        "data-[state=checked]:bg-red-500",
    },
    {
      name: "Blue",
      border: "border-blue-500",
      bg: "bg-blue-500",
      checked:
        "data-[state=checked]:bg-blue-500",
    },
    {
      name: "Yellow",
      border: "border-yellow-500",
      bg: "bg-yellow-500",
      checked:
        "data-[state=checked]:bg-yellow-500",
    },
  ];
  const { filter, setFilter } =
    useProductStore();
  let selectedColors = [
    ...filter.colors,
  ];
  const updateColorFilter = (
    color,
    checked
  ) => {
    let updatedColors;

    if (checked === "unchecked") {
      if (
        !selectedColors.includes(color)
      ) {
        updatedColors = [
          ...selectedColors,
          color,
        ]; // Add color to selectedColors
      } else {
        updatedColors =
          selectedColors.filter(
            (c) => c !== color
          ); // Remove color from selectedColors
      }
    } else {
      updatedColors =
        selectedColors.filter(
          (c) => c !== color
        ); // Remove color from selectedColors
    }
    setFilter({
      colors: updatedColors,
    }); // Update the filter state with updatedColors
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
              className={`${
                color.border
              } ${
                color.bg
              } w-6 h-6 border-4 ${
                color.checked
              } ${
                selectedColors.includes(
                  color.name
                ) &&
                "ring-[3px] ring-main"
              }`}
            />
          );
        })}
      </div>
    </FilterContainer>
  );
};

export default FilterByColor;
