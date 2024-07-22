import { useState } from "react";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import React from "react";
import Chat from "../Component/Chat";

const ChatLayout = ({
  defaultLayout = [320, 480],
  defaultCollapsed = false,
  navCollapsedSize,
}) => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(
          sizes
        )}`;
      }}
      className="items-stretch h-full"
    >
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <Chat isMobile={true} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ChatLayout;
