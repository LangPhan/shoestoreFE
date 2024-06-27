import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import useProductStore from "@/stores/productStore";

const ProductPagination = () => {
  const { page, setPage } =
    useProductStore();
  console.log("PageNo: ", page.pageNo);
  console.log(
    "PageSize: ",
    page.totalPages
  );
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
              className={`${
                page.pageNo === 0 &&
                "opacity-20 cursor-not-allowed"
              }`}
              href={`${
                page.pageNo !== 0
                  ? "#checkpoint"
                  : "#a"
              }`}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className={`${
                page.pageNo ===
                  page.totalPages - 1 &&
                "opacity-20 cursor-not-allowed"
              }`}
              href={`${
                page.pageNo !==
                page.totalPages - 1
                  ? "#checkpoint"
                  : "#a"
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
