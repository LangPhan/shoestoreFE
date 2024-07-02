import {
  LayoutGrid,
  LayoutList,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useProductStore from "@/stores/productStore";

const Detail = ({
  isGirdLayout,
  setIsGridLayout,
}) => {
  const { setSort, page } =
    useProductStore();
  const handleChangeSort = (value) => {
    if (value === "lowestPrice") {
      setSort({
        sortBy: "price",
        sortDir: "asc",
      });
    } else if (
      value === "highestPrice"
    ) {
      setSort({
        sortBy: "price",
        sortDir: "desc",
      });
    } else {
      setSort({
        sortBy: "",
        sortDir: "",
      });
    }
  };
  return (
    <div className="min-w-full h-fit py-3 px-4 rounded-3xl border-slate-300 border-[1px] flex justify-between gap-1">
      <div className="flex gap-4 items-center">
        <div className="flex gap-1 sm:gap-2">
          <LayoutGrid
            className={`${
              isGirdLayout &&
              "text-main"
            } cursor-pointer hover:text-main hover:scale-105`}
            onClick={() =>
              setIsGridLayout(true)
            }
          />
          <LayoutList
            className={`${
              !isGirdLayout &&
              "text-main"
            } cursor-pointer hover:text-main hover:scale-105`}
            onClick={() =>
              setIsGridLayout(false)
            }
          />
        </div>
        <p className="text-sc hidden md:block">
          {`No.${
            page.pageNo + 1
          } page of ${
            page.totalPages
          } pages`}
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center gap-2 sm:gap-3">
          <span className="text-[12px] min-[420px]:text-sc">
            Sort By
          </span>
          <Select
            defaultValue="default"
            onValueChange={(value) =>
              handleChangeSort(value)
            }
          >
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="default">
                  Default
                </SelectItem>
                <SelectItem value="lowestPrice">
                  Lowest Price
                </SelectItem>
                <SelectItem value="highestPrice">
                  Highest Price
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Detail;
