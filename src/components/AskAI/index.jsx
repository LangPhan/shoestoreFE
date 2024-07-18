import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { ScrollArea } from "../ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import InputField from "./InputField";
import Message from "./Message";
import useAI from "@/hooks/useAI";
import { memo, useState } from "react";
import { v4 } from "uuid";

const AskAI = () => {
  const askAIMutation =
    useAI.postQuestion();
  const [messages, setMessages] =
    useState([]);
  return (
    <Dialog className="max-w-screen">
      <DialogTrigger asChild>
        <Button variant="outline">
          Ask AI
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full h-[95%] 2xl:h-3/4 flex flex-col">
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
