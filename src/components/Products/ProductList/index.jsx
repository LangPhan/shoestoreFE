import {
  useEffect,
  useState,
} from "react";
import ProductCard from "../Card";
import Detail from "../Details";
import ProductPagination from "../Pagination";
import ProductHorizontalCard from "../Card/Horizontal";
import { v4 } from "uuid";
import useProductStore from "@/stores/productStore";

const ProductList = () => {
  const [
    isGirdLayout,
    setIsGridLayout,
  ] = useState(true);
  const {
    products,
    fetchProducts,
    isLoading,
    url,
  } = useProductStore();
  useEffect(() => {
    if (
      !products ||
      products.length === 0
    ) {
      fetchProducts();
    }
  }, [fetchProducts, url]);
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
            {isLoading && (
              <div>Loading...</div>
            )}
            {products &&
              products.map(
                (product) => {
                  return (
                    <ProductCard
                      key={v4()}
                      name={
                        product.title
                      }
                      price={
                        product.price
                      }
                      sale={100}
                      image={
                        product
                          .images[0]
                      }
                    />
                  );
                }
              )}
          </>
        ) : (
          <>
            {/* <ProductHorizontalCard />
            <ProductHorizontalCard />
            <ProductHorizontalCard /> */}
          </>
        )}
      </div>
      <ProductPagination />
    </div>
  );
};

export default ProductList;
