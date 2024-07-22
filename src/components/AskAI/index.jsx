import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import useAI from "@/hooks/useAI";
import { memo, useState } from "react";
import { v4 } from "uuid";
import { ScrollArea } from "../ui/scroll-area";
import InputField from "./InputField";
import Message from "./Message";

const AskAI = () => {
  const askAIMutation =
    useAI.postQuestion();
  const [messages, setMessages] =
    useState([]);
  return (
    <Dialog className="max-w-screen">
      <DialogTrigger asChild>
        <div
          className="group fixed w-[10%] md:w-[6%] xl:w-[4%] aspect-square bottom-[12%] right-[4%] md:right-[2%] border-[2px] rounded-full border-main px-2 py-2 hover:cursor-pointer 
        bg-[url('./ai.jpg')] bg-cover bg-center shadow-sm shadow-main 
      "
        >
          <div className="group-hover:visible absolute invisible right-[100%] w-[120px] top-[10%] px-2 py-2 border-[2px] border-main rounded-xl -translate-x-[5%] transition-opacity duration-500 drop-shadow-md">
            Ask AI Now
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full h-full md:h-[95%] 2xl:h-3/4 flex flex-col">
        <div className="flex flex-col flex-1 overflow-hidden">
          <DialogHeader>
            <DialogTitle>
              Welcome to ASK AI
            </DialogTitle>
            <DialogDescription>
              I will help you about
              choose a shoe which suit
              with you
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="flex-1 overflow-auto rounded-md border p-4">
            {messages.length > 0 &&
              messages.map(
                (message) => {
                  return (
                    <Message
                      key={v4()}
                      isAI={
                        message.isAi
                      }
                      data={
                        message.text
                      }
                      image={
                        message.image
                      }
                    />
                  );
                }
              )}
            {askAIMutation.isPending && (
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>
                    AI
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h2 className="h-4">
                    Generating...
                  </h2>
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            )}
          </ScrollArea>
        </div>
        <InputField
          askAIMutation={askAIMutation}
          setMessages={setMessages}
        />
      </DialogContent>
    </Dialog>
  );
};

export default memo(AskAI);
