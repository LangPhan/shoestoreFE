import FilterByCategories from "./ByCategories";
import FilterBySize from "./Size";

const Filter = () => {
  return (
    <div className="col-span-1 max-w-[260px]">
      <FilterByCategories />
      <FilterBySize />
    </div>
  );
};

export default Filter;
