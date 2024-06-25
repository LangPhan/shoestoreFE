import {
  memo,
  useEffect,
  useRef,
} from "react";
import FilterByCategories from "./ByCategories";
import FilterByColor from "./Color";
import FilterBySize from "./Size";

const Filter = ({
  isFilter,
  setIsFilter,
}) => {
  const filterRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (
      event
    ) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(
          event.target
        )
      ) {
        setIsFilter(false);
      }
    };

    // Add event listener
    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [setIsFilter]);
  return (
    <div
      ref={filterRef}
      className={`
        ${
          isFilter
            ? "md:static z-50 md:z-0 bg-background top-[80px] left-0 p-4 md:p-0 overflow-y-auto"
            : "-left-[100%] top-0 invisible md:visible"
        } 
       fixed max-w-[260px] md:static transition-all duration-500`}
    >
      <FilterByCategories />
      <FilterBySize />
      <FilterByColor />
    </div>
  );
};

export default memo(Filter);
