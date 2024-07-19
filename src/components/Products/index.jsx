import {
  Suspense,
  lazy,
  useRef,
  useState,
} from "react";
import Filter from "./Filters";
import { FilterIcon } from "lucide-react";
import Detail from "./Details";
const ProductList = lazy(() =>
  import("./ProductList/index.jsx")
);

const Products = () => {
  const [isFilter, setIsFilter] =
    useState(false);
  const [
    isGirdLayout,
    setIsGridLayout,
  ] = useState(true);
  const checkPointRef = useRef(null);
  return (
    <div
      className="container-main md:grid grid-cols-4 gap-10 py-10"
      ref={checkPointRef}
    >
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
      <div className="col-span-3 text-mc">
        <Detail
          isGirdLayout={isGirdLayout}
          setIsGridLayout={
            setIsGridLayout
          }
        />
        <Suspense>
          <ProductList
            isGirdLayout={isGirdLayout}
            checkPointRef={
              checkPointRef
            }
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Products;
