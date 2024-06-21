import { Suspense, lazy } from "react";
import Filter from "./Filters";
const ProductList = lazy(() =>
  import("./ProductList/index.jsx")
);

const Products = () => {
  return (
    <div className="container-main grid grid-cols-4 gap-10 py-10">
      <Filter />
      <Suspense
        fallback={<h2>Loading</h2>}
      >
        <ProductList />
      </Suspense>
    </div>
  );
};

export default Products;
