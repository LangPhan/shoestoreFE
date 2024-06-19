import { Checkbox } from "@/components/ui/checkbox";
import FilterContainer from "./Container";

const FilterBySize = () => {
  return (
    <div>
      <FilterContainer name={"Size"}>
        <ul className="text-mainForeground text-sc font-normal leading-8">
          <li>
            <Checkbox className="border-mainForeground" />{" "}
            <span className="pl-2">
              S
            </span>
          </li>
          <li>
            <Checkbox className="border-mainForeground" />{" "}
            <span className="pl-2">
              M
            </span>
          </li>
        </ul>
      </FilterContainer>
    </div>
  );
};

export default FilterBySize;
