import { ArrowRight } from "lucide-react";
import FilterContainer from "./Container";

const FilterByCategories = () => {
  return (
    <div>
      <FilterContainer
        name={"Product Categories"}
      >
        <ul className="text-sc font-normal text-mainForeground leading-8">
          <li className="flex flex-row justify-between items-center">
            Men's Shoes
            <ArrowRight />
          </li>
          <li className="flex flex-row justify-between items-center">
            Men's Shoes
            <ArrowRight />
          </li>
          <li className="flex flex-row justify-between items-center">
            Men's Shoes
            <ArrowRight />
          </li>
          <li className="flex flex-row justify-between items-center">
            Men's Shoes
            <ArrowRight />
          </li>
        </ul>
      </FilterContainer>
    </div>
  );
};

export default FilterByCategories;
