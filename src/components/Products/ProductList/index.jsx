import ProductCard from "../Card";
import Detail from "../Details";
import ProductPagination from "../Pagination";

const ProductList = () => {
  return (
    <div className="grid col-span-3">
      <Detail />
      <div className="grid grid-cols-3 gap-4 py-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <ProductPagination />
    </div>
  );
};

export default ProductList;
