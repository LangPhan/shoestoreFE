import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { Avatar, AvatarImage } from "../../ui/avatar";
import { AnimatePresence, motion } from "framer-motion";
import ChatBottombar from "./ChatBottombar";

const ChatList = ({ messages, sendMessage, isMobile, loggedUser }) => {
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col w-full h-full overflow-x-hidden overflow-y-auto">
      <div
        ref={messagesContainerRef}
        className="flex flex-col w-full h-full overflow-x-hidden overflow-y-auto"
      >
        <AnimatePresence>
          {messages &&
            messages.length > 0 &&
            messages?.map((message, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                transition={{
                  opacity: { duration: 0.1 },
                  layout: {
                    type: "spring",
                    bounce: 0.3,
                    duration: messages.indexOf(message) * 0.05 + 0.2,
                  },
                }}
                style={{
                  originX: 0.5,
                  originY: 0.5,
                }}
                className={cn(
                  "flex flex-col gap-2 p-4 whitespace-pre-wrap",
                  !message.user || message.user?.id === loggedUser?.id
                    ? "items-end"
                    : "items-start"
                )}
              >
                <div className="flex items-center gap-3">
                  {message.user?.id !== loggedUser?.id &&
                  message.user?.avatar ? (
                    <Avatar className="flex items-center justify-center">
                      <AvatarImage
                        src={message.user?.avatar}
                        alt={message.user?.username}
                        width={6}
                        height={6}
                      />
                    </Avatar>
                  ) : (
                    <></>
                  )}
                  <span className="max-w-xs p-3 rounded-md bg-accent">
                    {message.content}
                  </span>
                  {message.user?.id === loggedUser?.id &&
                    message.user?.avatar && (
                      <Avatar className="flex items-center justify-center">
                        <AvatarImage
                          src={message.avatar}
                          alt={message.name}
                          width={6}
                          height={6}
                        />
                      </Avatar>
                    )}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
      <ChatBottombar sendMessage={sendMessage} isMobile={isMobile} />
    </div>
  );
};

export default ChatList;
