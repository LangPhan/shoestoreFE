import { ArrowRight } from "lucide-react";
import FilterContainer from "./Container";
import { useCategoryProduct } from "@/hooks/useProduct";
import useProductStore from "@/stores/productStore";
import { v4 } from "uuid";

const FilterByCategories = () => {
  const {
    category: categorySelected,
    setCategory,
  } = useProductStore();
  const { data } = useCategoryProduct();
  const formatName = (name) => {
    const words = name.split("_");
    let finalName = "";
    words.forEach((word) => {
      finalName =
        finalName + " " + word;
    });
    return finalName;
  };
  return (
    <div>
      <FilterContainer
        name={"Product Categories"}
      >
        <ul className="text-sc font-normal text-mainForeground leading-8">
          <li
            key={v4()}
            className={`${
              categorySelected === "" &&
              "text-main"
            } flex flex-row justify-between items-center capitalize select-none cursor-pointer hover:text-main`}
            onClick={() =>
              setCategory("")
            }
          >
            All
            <ArrowRight />
          </li>
          {data &&
            data?.content.map(
              (category) => {
                return (
                  <li
                    key={category.id}
                    className={`${
                      category.id ===
                        categorySelected &&
                      "text-main"
                    } flex flex-row justify-between items-center capitalize select-none cursor-pointer hover:text-main`}
                    onClick={() =>
                      setCategory(
                        category.id
                      )
                    }
                  >
                    {formatName(
                      category.name
                    )}
                    <ArrowRight />
                  </li>
                );
              }
            )}
        </ul>
      </FilterContainer>
    </div>
  );
};

export default FilterByCategories;
