import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { memo } from "react";

const RightSide = () => {
  return (
    <motion.div
      initial={{
        y: -100,
        x: 10,
        rotate: 30,
      }}
      animate={{
        y: 0,
        x: 0,
        rotate: 15,
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "circInOut",
      }}
      className="relative md:w-1/2 min-h-fit group md:-translate-y-[20%] flex justify-center md:block"
    >
      <div
        className="relative h-[400px] md:h-full aspect-square ease-in-out drop-shadow-2xl bg-[url('https://github.com/LangPhan/shoestoreFE/blob/68175e516e9aa055d1e9a6743bf45849df6686f8/public/main.png?raw=true')]
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
              <p>Personal</p>
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
              <p>Flexible</p>
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
              <p>Energy</p>
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
              <p>Speed Up</p>
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
              <p>Colorful</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </motion.div>
  );
};

export default memo(RightSide);
