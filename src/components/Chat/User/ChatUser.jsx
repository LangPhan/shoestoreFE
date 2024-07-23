import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Headset } from "lucide-react";
import React from "react";
import ChatLayout from "./ChatLayout";

const ChatUser = () => {
  return (
    <Popover className="absolute">
      <PopoverTrigger className=" w-fit h-fit px-2 py-2 rounded-2xl flex items-center justify-center text-white bg-main">
        Support Now
        <Headset
          size={24}
          className="ml-2"
        />
      </PopoverTrigger>
      <PopoverContent className="w-[500px] h-[500px]">
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-4 py-32 md:px-24">
          <div className="z-10 w-[500px] h-[500px] max-w-5xl text-sm border rounded-lg lg:flex">
            <ChatLayout
              navCollapsedSize={8}
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ChatUser;
