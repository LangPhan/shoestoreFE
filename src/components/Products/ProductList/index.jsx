import { useState } from "react";
import ProductCard from "../Card";
import Detail from "../Details";
import ProductPagination from "../Pagination";

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
      <div className="grid grid-cols-3 gap-4 py-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <ProductPagination />
    </div>
  );
};

export default ProductList;
