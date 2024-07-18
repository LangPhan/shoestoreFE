import { Button } from "@/components/ui/button";

const LeftSide = () => {
  return (
    <div className="md:w-1/2 flex justify-center overflow-hidden">
      <div className="relative w-full">
        <div className="font-extrabold text-6xl lg:text-8xl leading-tight tracking-wider select-none drop-shadow-lg">
          <div className="h-full">
            <span>Sh</span>
            <span className="inline-block py-[12px] lg:py-[14px] px-[64px] lg:px-[72px] border-main border-[12px] rounded-3xl"></span>
            <span className="ml-1">
              es
            </span>
          </div>
          <span>Collect !</span>
        </div>
        <div className="flex flex-col max-w-[480px] lg:flex-row gap-4 my-5">
          <p className="text-md lg:text-mc text-mainForeground lg:max-w-[300px]">
            Discover our stylish and
            comfortable shoes, perfect
            for every occasion and need.
          </p>
          <Button className="rounded-3xl px-10 py-6 shadow-xl bg-main">
            Shop Now
          </Button>
        </div>
        <div className="w-[220px] h-[74px] border-slate-200 border-[1px] rounded-full flex items-center justify-start px-1 shadow-lg">
          <div className="relative w-[64px] aspect-square border-[1px] border-slate-200 rounded-full"></div>
          <div className="relative w-[64px] aspect-square border-[1px] border-slate-200 rounded-full -translate-x-1/2"></div>
          <p className="text-mainForeground -translate-x-1/3">
            <span className="text-main mr-1">
              7+
            </span>
            Brand
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
