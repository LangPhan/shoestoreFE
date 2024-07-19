import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import useProductStore from "@/stores/productStore";

const ProductPagination = () => {
  const { page, setPage } =
    useProductStore();
  const handlePreviousPage = () => {
    if (page.pageNo > 0) {
      setPage({
        pageNo: page.pageNo - 1,
      });
    }
  };
  const handleNextPage = () => {
    if (
      page.pageNo <
      page.totalPages - 1
    ) {
      setPage({
        pageNo: page.pageNo + 1,
      });
    }
  };

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem
            onClick={() =>
              handlePreviousPage()
            }
          >
            <PaginationPrevious
              className={`hover:cursor-pointer ${
                page.pageNo === 0 &&
                "opacity-20 cursor-not-allowed"
              }`}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#checkpoint"
              isActive
            >
              {page.pageNo + 1}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              className={`hover:cursor-pointer ${
                page.pageNo ===
                  page.totalPages - 1 &&
                "opacity-20 cursor-not-allowed"
              }`}
              onClick={() =>
                handleNextPage()
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default ProductPagination;
