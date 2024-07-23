import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LeftSide = () => {
  return (
    <div className="md:w-1/2 pb-5 flex justify-center overflow-hidden">
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
          <Button className="rounded-3xl px-10 py-6 shadow-xl bg-main font-bold text-white">
            <Link to={"/product"}>
              Shop Now
            </Link>
          </Button>
        </div>
        <div className="w-[220px] h-[74px] border-slate-200 border-[1px] rounded-full flex items-center justify-start px-1 shadow-lg">
          <div className="z-20 relative w-[64px] aspect-square border-[1px] border-slate-200 rounded-full bg-[url('https://masterbundles.com/wp-content/uploads/2022/03/1-nike-logo-design-%E2%80%93-history-meaning-and-evolution.png')] bg-center bg-cover"></div>
          <div
            className="z-10 relative w-[64px] aspect-square border-[1px] border-slate-200 rounded-full -translate-x-1/2
          bg-[url('https://inkythuatso.com/uploads/thumbnails/800/2021/09/logo-adidas-vector-inkythuatso-01-29-09-08-58.jpg')] bg-center bg-cover
          "
          ></div>
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
