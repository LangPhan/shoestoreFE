import FilterByCategories from "./ByCategories";
import FilterByColor from "./Color";
import FilterBySize from "./Size";

const Filter = () => {
  return (
    <div className="col-span-1 max-w-[260px]">
      <FilterByCategories />
      <FilterBySize />
      <FilterByColor />
    </div>
  );
};

export default Filter;
