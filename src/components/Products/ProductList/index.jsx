import ProductCard from "../Card";
import ProductPagination from "../Pagination";
import { Skeleton } from "@/components/ui/skeleton";
import ProductHorizontalCard from "../Card/Horizontal";
import { v4 } from "uuid";
import { useProduct } from "@/hooks/useProduct";
import { toast } from "react-toastify";
import useProductStore from "@/stores/productStore";
import { useEffect } from "react";

const ProductList = ({
  isGirdLayout,
}) => {
  const {
    category,
    sort,
    filter,
    page,
    setPage,
  } = useProductStore();

  const {
    data: products,
    isLoading,
    isError,
    error,
    isFetched,
  } = useProduct({
    category,
    page,
    sort,
    filter,
  });
  console.log(products);
  useEffect(() => {
    if (isFetched && products) {
      setPage({
        pageNo:
          products.pageable.pageNumber,
        totalPages: products.totalPages,
      });
    }
  }, [isFetched]);

  if (isLoading) {
    return (
      <Skeleton
        className={`rounded-2xl w-full h-full my-4`}
      />
    );
  }

  if (isError) {
    return toast.error(error.message);
  }

  return (
    <>
      <div
        className={`py-6 ${
          isGirdLayout
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            : "flex flex-col gap-4 justify-between"
        }`}
      >
        {isGirdLayout ? (
          <>
            {products &&
              products?.content?.map(
                (product) => {
                  return (
                    <ProductCard
                      key={v4()}
                      name={
                        product?.name
                      }
                      price={
                        product.price
                      }
                      sale={100}
                      image={
                        product.imgLink
                      }
                    />
                  );
                }
              )}
          </>
        ) : (
          <>
            {products &&
              products?.content?.map(
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
    </>
  );
};

export default ProductList;
