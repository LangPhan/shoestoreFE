import ProductCard from "../Card";
import Detail from "../Details";

const ProductList = () => {
  return (
    <div className="grid col-span-3">
      <Detail />
      <div className="grid grid-cols-3 gap-4 py-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
