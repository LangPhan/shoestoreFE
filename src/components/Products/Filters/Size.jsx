import { Checkbox } from "@/components/ui/checkbox";
import FilterContainer from "./Container";
import { Label } from "@/components/ui/label";

const FilterBySize = () => {
  const sizes = ["s", "m", "l"];
  return (
    <div>
      <FilterContainer name={"Size"}>
        <ul className="text-mainForeground text-sc font-normal leading-8">
          {sizes.map((size) => {
            return (
              <li
                key={size}
                className="flex items-center"
              >
                <Checkbox
                  id={size}
                  className="border-mainForeground data-[state=checked]:bg-main
                  data-[state=checked]:border-main
                  "
                />

                <Label
                  htmlFor={size}
                  className="text-[16px] translate-y-[1px] pl-5 uppercase"
                >
                  {size}
                </Label>
              </li>
            );
          })}
        </ul>
      </FilterContainer>
    </div>
  );
};

export default FilterBySize;
