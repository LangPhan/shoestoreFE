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

const Detail = () => {
  return (
    <div className="w-full h-fit py-3 px-4 rounded-3xl border-slate-300 border-[1px] flex justify-between">
      <div className="flex gap-4 items-center">
        <div className="flex gap-2">
          <LayoutGrid />
          <LayoutList />
        </div>
        <p>
          Showing 1-12 of 15 item(s)
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center gap-2">
          <span>Short By</span>
          <Select defaultValue="default">
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="default">
                  Default
                </SelectItem>
                <SelectItem value="lowPrice">
                  Lowest Price
                </SelectItem>
                <SelectItem value="highPrice">
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
