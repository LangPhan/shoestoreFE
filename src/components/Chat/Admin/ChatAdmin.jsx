import React from "react";
import ChatLayout from "./ChatLayout";

const ChatAdmin = () => {
  const defaultLayout = [30, 70];
  return (
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <main className="flex h-[calc(100dvh)] flex-col items-center justify-center p-4 md:px-24 gap-4">
        <div className="z-10 w-full h-full max-w-5xl text-sm border rounded-lg lg:flex">
          <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
        </div>
      </main>
    </div>
  );
};

export default ChatAdmin;
