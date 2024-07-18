import { memo } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const RightSide = () => {
  return (
    <div className="relative md:w-1/2 min-h-fit group md:-translate-y-[20%] flex justify-center md:block">
      <div
        className="relative h-[400px] md:h-full aspect-square ease-in-out drop-shadow-2xl bg-[url('https://github.com/LangPhan/shoestoreFE/blob/dev/src/assets/main.png?raw=true')]
        bg-center bg-contain bg-no-repeat
        "
        alt="Shoe Banner"
      >
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <div className="absolute hover:cursor-pointer left-[20%] top-[50%] w-6 h-6 bg-main rounded-full animate-ping-custom hover:animate-none">
                <div className="absolute hover:cursor-pointer w-3 h-3 bg-slate-200 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-custom"></div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <div className="absolute hover:cursor-pointer right-[20%] top-[50%] w-6 h-6 bg-main rounded-full animate-ping-custom hover:animate-none">
                <div className="absolute hover:cursor-pointer w-3 h-3 bg-slate-200 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-custom"></div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <div className="absolute hover:cursor-pointer right-[50%] top-[20%]  w-6 h-6 bg-main rounded-full animate-ping-custom hover:animate-none">
                <div className="absolute hover:cursor-pointer w-3 h-3 bg-slate-200 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-custom"></div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <div className="absolute hover:cursor-pointer bottom-[20%] left-[20%] w-6 h-6 bg-main rounded-full animate-ping-custom hover:animate-none">
                <div className="absolute hover:cursor-pointer w-3 h-3 bg-slate-200 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-custom"></div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
              <div className="absolute hover:cursor-pointer bottom-[50%] right-[50%] w-6 h-6 bg-main rounded-full animate-ping-custom hover:animate-none">
                <div className="absolute hover:cursor-pointer w-3 h-3 bg-slate-200 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse-custom"></div>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default memo(RightSide);
