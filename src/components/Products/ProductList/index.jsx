import { Skeleton } from "@/components/ui/skeleton";
import Spinner from "@/components/ui/spinner";
import { useProduct } from "@/hooks/useProduct";
import { scrollToRef } from "@/lib/utils";
import useProductStore from "@/stores/productStore";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import ProductCard from "../Card";
import ProductHorizontalCard from "../Card/Horizontal";
import ProductPagination from "../Pagination";
import Empty from "./Empty";

const ProductList = ({
  isGirdLayout,
  checkPointRef,
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

  useEffect(() => {
    if (isFetched && products) {
      setPage({
        pageNo:
          products.pageable.pageNumber,
        totalPages: products.totalPages,
      });
      scrollToRef(checkPointRef);
    }
  }, [isFetched, products]);

  if (isLoading) {
    return (
      <Skeleton
        className={`rounded-2xl w-full h-screen flex justify-center items-center my-4`}
      >
        <Spinner />
      </Skeleton>
    );
  }

  if (
    isFetched &&
    products?.totalElements === 0
  ) {
    return <Empty />;
  }

  if (isError) {
    toast.error(error.message);
    return <Empty />;
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
                      categoryId={
                        product
                          ?.category?.id
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
                      name={
                        product?.name
                      }
                      price={
                        product?.price
                      }
                      description={
                        product?.description
                      }
                      image={
                        product?.imgLink
                      }
                      sale={100}
                    />
                  );
                }
              )}
          </>
        )}
      </div>
      {products && (
        <ProductPagination />
      )}
    </>
  );
};

export default ProductList;
