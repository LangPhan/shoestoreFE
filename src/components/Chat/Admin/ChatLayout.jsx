import { userData } from "@/constant/data";
import { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import React from "react";
import { messageApi } from "@/api/messageApi";
import { Sidebar } from "../Component/Sidebar";
import { roomChatApi } from "@/api/roomChatApi";
import Chat from "./Chat";

const ChatLayout = ({
  defaultLayout = [320, 480],
  defaultCollapsed = false,
  navCollapsedSize,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [isMobile, setIsMobile] = useState(false);
  const [roomChats, setRoomChats] = useState([]);
  const [selectedRoomChat, setSelectedRoomChat] = useState("");
  const accessToken = JSON.parse(localStorage.getItem("token")).accessToken;

  useEffect(() => {
    fetchRoomChat();
  }, []);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkScreenWidth();

    // Event listener for screen width changes
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);
  const fetchRoomChat = async () => {
    var roomPage = await roomChatApi.getRoomChats({ accessToken });
    debugger;
    setRoomChats(roomPage.content);
    setSelectedRoomChat(roomPage.content[0]);
  };

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
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        collapsedSize={navCollapsedSize}
        collapsible={true}
        minSize={isMobile ? 0 : 24}
        maxSize={isMobile ? 8 : 30}
        onCollapse={() => {
          setIsCollapsed(true);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            true
          )}`;
        }}
        onExpand={() => {
          setIsCollapsed(false);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            false
          )}`;
        }}
        className={cn(
          isCollapsed &&
            "min-w-[50px] md:min-w-[70px] transition-all duration-300 ease-in-out"
        )}
      >
        <Sidebar
          isCollapsed={isCollapsed || isMobile}
          roomChats={roomChats}
          selectedRoomChat={selectedRoomChat}
          setSelectedRoomChat={setSelectedRoomChat}
          isMobile={isMobile}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
        <Chat selectedRoomChat={selectedRoomChat} isMobile={isMobile} />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ChatLayout;
