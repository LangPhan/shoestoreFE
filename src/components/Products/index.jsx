import Banner from "./Banner";
import Filter from "./Filters";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <div className="grid grid-cols-4 gap-10 px-[8%] py-10 max-w-[1800px] ">
      <Filter />
      <ProductList />
    </div>
  );
};

export default Products;
