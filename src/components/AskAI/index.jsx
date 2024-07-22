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
import { MessageCircleMore } from "lucide-react";
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
        bg-[url('https://github.com/LangPhan/shoestoreFE/blob/68175e516e9aa055d1e9a6743bf45849df6686f8/public/ai.jpg?raw=true')] bg-cover bg-center shadow-sm shadow-main z-50 
      "
        >
          <div className="group-hover:visible absolute invisible right-[100%] w-[120px] top-[10%] px-2 py-2 border-[2px] border-main rounded-xl -translate-x-[5%] transition-opacity duration-500 drop-shadow-md bg-white dark:bg-black">
            Ask AI Now
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-full h-full md:h-[95%] 2xl:h-3/4 flex flex-col">
        <div className="flex flex-col flex-1 overflow-hidden">
          <DialogHeader
            className={"mb-2"}
          >
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
            {messages.length > 0 ? (
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
              )
            ) : (
              <div className="w-full h-full my-auto flex flex-col justify-center items-center">
                <MessageCircleMore className="w-56 h-44 text-slate-200 dark:text-slate-700" />
              </div>
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
          messages={messages}
          setMessages={setMessages}
        />
      </DialogContent>
    </Dialog>
  );
};

export default memo(AskAI);
