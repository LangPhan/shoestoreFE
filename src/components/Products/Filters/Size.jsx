import { Checkbox } from "@/components/ui/checkbox";
import FilterContainer from "./Container";
import { Label } from "@/components/ui/label";

const FilterBySize = () => {
  const sizes = ["s", "m", "l"];
  return (
    <div>
      <FilterContainer name={"Size"}>
        <ul className="text-mainForeground text-sc font-normal leading-8">
          <li className="flex items-center">
            <Checkbox
              id="s"
              className="border-mainForeground"
            />

            <Label
              htmlFor="s"
              className="text-[16px] translate-y-[1px] pl-5 uppercase"
            >
              s
            </Label>
          </li>
        </ul>
      </FilterContainer>
    </div>
  );
};

export default FilterBySize;
