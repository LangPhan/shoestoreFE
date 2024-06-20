import Filter from "./Filters";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <div className="container-main grid grid-cols-4 gap-10 py-10">
      <Filter />
      <ProductList />
    </div>
  );
};

export default Products;
