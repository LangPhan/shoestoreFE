import { useState } from "react";
import ProductCard from "../Card";
import Detail from "../Details";
import ProductPagination from "../Pagination";
import { Skeleton } from "@/components/ui/skeleton";
import ProductHorizontalCard from "../Card/Horizontal";
import { v4 } from "uuid";
import { useProduct } from "@/hooks/useProduct";
import { toast } from "react-toastify";

const ProductList = () => {
  const [
    isGirdLayout,
    setIsGridLayout,
  ] = useState(true);

  const {
    data,
    isLoading,
    isError,
    error,
  } = useProduct();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-5 h-full col-span-3 ">
        <Skeleton
          className={
            "w-full h-[80px] rounded-2xl"
          }
        />
        <Skeleton
          className={`w-full h-full rounded-2xl`}
        />
      </div>
    );
  }

  if (isError) {
    return toast.error(error.message);
  }

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
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            : "flex flex-col gap-4 justify-between"
        }`}
      >
        {isGirdLayout ? (
          <>
            {data &&
              data.products.map(
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
            {data &&
              data.products.map(
                (product) => {
                  return (
                    <ProductHorizontalCard
                      key={v4()}
                    />
                  );
                }
              )}
          </>
        )}
      </div>
      <ProductPagination />
    </div>
  );
};

export default ProductList;
