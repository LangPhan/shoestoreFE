import {
  Suspense,
  lazy,
  useState,
} from "react";
import Filter from "./Filters";
import { FilterIcon } from "lucide-react";
const ProductList = lazy(() =>
  import("./ProductList/index.jsx")
);

const Products = () => {
  const [isFilter, setIsFilter] =
    useState(false);
  return (
    <div className="container-main md:grid grid-cols-4 gap-10 py-10">
      <Filter
        isFilter={isFilter}
        setIsFilter={setIsFilter}
      />
      <div
        className={`${
          isFilter &&
          "invisible -right-[100%]"
        } md:hidden fixed bottom-2 right-2 p-3 z-50 text-main bg-slate-200 shadow-2xl shadow-main rounded-full hover:cursor-pointer transition-all duration-500`}
        onClick={() =>
          setIsFilter(!isFilter)
        }
      >
        <FilterIcon className="text-center" />
      </div>
      <Suspense fallback={<></>}>
        <ProductList />
      </Suspense>
    </div>
  );
};

export default Products;
