import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const CardItem = () => {
  return (
    <div className="col relative font-bold w-full h-full border-[1px] rounded-lg border-slate-200">
      <div className="absolute w-6 h-6 flex items-center justify-center right-1 top-1 hover:bg-red-500 hover:rounded-full hover:cursor-pointer transition-all group">
        <X className="w-4 h-4 font-bold text-mainForeground group-hover:text-white" />
      </div>
      <div className="col-span-2 flex items-center gap-2">
        <img
          className="w-1/3 rounded-lg aspect-square"
          src="https://ananas.vn/wp-content/uploads/pro_track6_A6T001_1.jpg"
          alt="img"
        />
        <div className="w-2/3 space-y-1">
          <p className="truncate">
            A di đa
          </p>
          <p className="text-slate-300">
            Color-{" "}
            <span className="text-foreground">
              White
            </span>
          </p>
          <p className="text-slate-300">
            Size-{" "}
            <span className="text-foreground">
              S
            </span>
          </p>
        </div>
      </div>
      <div className="my-auto text-main">
        $120
        <span className="font-normal text-foreground text-xs line-through mx-1">
          $140
        </span>
      </div>
      <div className="my-auto flex flex-col sm:flex-row items-center gap-2 space-x-1">
        <Button
          variant="ghost"
          className="h-2 w-2"
        >
          -
        </Button>
        <span>1</span>
        <Button
          variant="ghost"
          className="h-2 w-2"
        >
          +
        </Button>
      </div>
      <div className="my-auto">
        $120
      </div>
    </div>
  );
};

export default CardItem;
