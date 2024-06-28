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
      name: "Brown",
      border: "border-amber-800",
      bg: "bg-amber-800",
      checked:
        "data-[state=checked]:bg-amber-800",
    },
    {
      name: "Bubblegum Pink",
      border: "border-pink-500",
      bg: "bg-pink-500",
      checked:
        "data-[state=checked]:bg-pink-500",
    },
    {
      name: "Bold Orange",
      border: "border-orange-500",
      bg: "bg-orange-500",
      checked:
        "data-[state=checked]:bg-orange-500",
    },
    {
      name: "Pistachio Green",
      border: "border-green-500",
      bg: "bg-green-500",
      checked:
        "data-[state=checked]:bg-green-500",
    },
    {
      name: "Navy Blue",
      border: "border-blue-500",
      bg: "bg-blue-500",
      checked:
        "data-[state=checked]:bg-blue-500",
    },
    {
      name: "Metallics",
      border: "border-gray-500", // Assuming a metallic gray
      bg: "bg-gray-500",
      checked:
        "data-[state=checked]:bg-gray-500",
    },
    {
      name: "White",
      border: "border-white",
      bg: "bg-white",
      checked:
        "data-[state=checked]:bg-white",
    },
    {
      name: "Black",
      border: "border-black",
      bg: "bg-black",
      checked:
        "data-[state=checked]:bg-black",
    },
    {
      name: "Beige/Taupe",
      border: "border-gray-300", // A common shade for beige/taupe
      bg: "bg-gray-300",
      checked:
        "data-[state=checked]:bg-gray-300",
    },
    {
      name: "Olive Green",
      border: "border-green-700", // A darker shade for olive
      bg: "bg-green-700",
      checked:
        "data-[state=checked]:bg-green-700",
    },
    {
      name: "Mustard Yellow",
      border: "border-yellow-600", // A mustard-like shade
      bg: "bg-yellow-600",
      checked:
        "data-[state=checked]:bg-yellow-600",
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
      <div className="text-mainForeground max-w-[200px] h-fit flex gap-2 flex-wrap text-sc font-normal leading-8 my-5">
        {colors.map((color) => {
          return (
            <Checkbox
              title={color.name}
              key={v4()}
              onClick={(e) => {
                updateColorFilter(
                  color.name,
                  e.target.getAttribute(
                    "data-state"
                  )
                );
              }}
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
                "ring-[3px] ring-main shadow-2xl drop-shadow-2xl"
              }`}
            />
          );
        })}
      </div>
    </FilterContainer>
  );
};

export default FilterByColor;
