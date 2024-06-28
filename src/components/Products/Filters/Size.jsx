import { Checkbox } from "@/components/ui/checkbox";
import FilterContainer from "./Container";
import { Label } from "@/components/ui/label";
import useProductStore from "@/stores/productStore";
import { memo } from "react";

const FilterBySize = () => {
  const sizes = [
    {
      name: "S",
      size: 39,
    },
    {
      name: "X",
      size: 40,
    },
    {
      name: "XL",
      size: 41,
    },
  ];

  const { filter, setFilter } =
    useProductStore();

  let selectedSizes = [...filter.sizes];

  const updateSizeFilter = (
    size,
    checked
  ) => {
    let updatedSizes;
    if (checked === "unchecked") {
      if (
        !selectedSizes.includes(size)
      ) {
        updatedSizes = [
          ...selectedSizes,
          size,
        ];
      } else {
        updatedSizes =
          selectedSizes.filter(
            (c) => c !== size
          );
      }
    } else {
      updatedSizes =
        selectedSizes.filter(
          (c) => c !== size
        );
    }
    setFilter({ sizes: updatedSizes });
  };
  return (
    <div>
      <FilterContainer name={"Size"}>
        <ul className="text-mainForeground text-sc font-normal leading-8">
          {sizes.map((size) => {
            return (
              <li
                key={size.size}
                className="flex items-center"
              >
                <Checkbox
                  id={size.size}
                  className="border-mainForeground data-[state=checked]:bg-main
                  data-[state=checked]:border-main
                  "
                  onClick={(e) => {
                    updateSizeFilter(
                      size.size,
                      e.target.getAttribute(
                        "data-state"
                      )
                    );
                  }}
                />

                <Label
                  htmlFor={size.size}
                  className="text-[16px] translate-y-[1px] pl-5 uppercase"
                >
                  {size.name}
                </Label>
              </li>
            );
          })}
        </ul>
      </FilterContainer>
    </div>
  );
};

export default memo(FilterBySize);
