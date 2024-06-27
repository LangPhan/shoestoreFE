import { FilterX } from "lucide-react";
import React from "react";

const Empty = () => {
  return (
    <div className="w-full h-[200px] flex justify-center items-center gap-2 text-mainForeground border-2 my-2 border-dashed rounded-xl">
      <FilterX className="w-14 h-14" />
      <p>No thing to show</p>
    </div>
  );
};

export default Empty;
