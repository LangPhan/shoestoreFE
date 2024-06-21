import { useState } from "react";
import ProductCard from "../Card";
import Detail from "../Details";
import ProductPagination from "../Pagination";
import ProductHorizontalCard from "../Card/Horizontal";

const ProductList = () => {
  const [
    isGirdLayout,
    setIsGridLayout,
  ] = useState(true);

  return (
    <div className="grid col-span-3 text-mc">
      <Detail
        isGirdLayout={isGirdLayout}
        setIsGridLayout={
          setIsGridLayout
        }
      />
      <div
        className={`py-6 ${
          isGirdLayout
            ? "grid grid-cols-3 gap-4"
            : "flex flex-col gap-4 justify-between"
        }`}
      >
        {isGirdLayout ? (
          <>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </>
        ) : (
          <>
            <ProductHorizontalCard />
            <ProductHorizontalCard />
            <ProductHorizontalCard />
          </>
        )}
      </div>
      <ProductPagination />
    </div>
  );
};

export default ProductList;
