import { userData } from "@/constant/data";
import { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import React from "react";
import Chat from "../Component/Chat";
import { messageApi } from "@/api/messageApi";

const ChatLayout = ({
  defaultLayout = [320, 480],
  defaultCollapsed = false,
  navCollapsedSize,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [isMobile, setIsMobile] = useState(false);

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
