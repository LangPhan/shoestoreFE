import Banner from "./Banner";
import Filter from "./Filters";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <div className="max-w-screen h-full">
      <Banner />
      <div className="grid grid-cols-4 gap-10 px-[8%] py-10">
        <Filter />
        <ProductList />
      </div>
    </div>
  );
};

export default Products;
