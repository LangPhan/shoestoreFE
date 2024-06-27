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

const ProductPagination = ({
  first,
  last,
}) => {
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
              className={`${
                page.pageNo === 0 &&
                "opacity-20 cursor-not-allowed"
              }`}
              {...(!first && {
                href: "#checkpoint",
              })}
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
          {/* <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem> */}
          <PaginationItem>
            <PaginationNext
              className={`${
                page.pageNo ===
                  page.totalPages - 1 &&
                "opacity-20 cursor-not-allowed"
              }`}
              {...(!last && {
                href: "#checkpoint",
              })}
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
