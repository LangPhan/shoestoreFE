import React from "react";
import ChatLayout from "./ChatLayout";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MessageCircleMore } from "lucide-react";

const ChatUser = () => {
  return (
    <Popover className="absolute">
      <PopoverTrigger className=" w-[80px] h-[80px] flex items-center justify-center text-white bg-main rounded-full absolute bottom-5 right-5">
        <MessageCircleMore size={48} />
      </PopoverTrigger>
      <PopoverContent className="w-[500px] h-[500px]">
        <div className="flex flex-col items-center justify-center w-full h-full gap-4 p-4 py-32 md:px-24">
          <div className="z-10 w-[500px] h-[500px] max-w-5xl text-sm border rounded-lg lg:flex">
            <ChatLayout navCollapsedSize={8} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ChatUser;
