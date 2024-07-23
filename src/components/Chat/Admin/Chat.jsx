import { messageApi } from "@/api/messageApi";
import { Skeleton } from "@/components/ui/skeleton";
import Spinner from "@/components/ui/spinner";
import connectStompClient from "@/lib/stompClient";
import React, {
  useEffect,
  useState,
} from "react";
import ChatList from "../Component/ChatList";
import ChatTopbar from "../Component/ChatTopbar";

const Chat = ({
  selectedRoomChat,
  isMobile = true,
}) => {
  const [messagesState, setMessages] =
    useState([]);
  const [client, setClient] =
    useState(null);
  const [isLoading, setIsLoading] =
    useState(false);
  const accessToken = JSON.parse(
    localStorage.getItem("token")
  ).accessToken;

  const loggedUser = {
    id: "ab12d22d-9a33-4d3e-87d7-f1962da5d6c9",
    username: "kienuser",
    phoneNumber: "string",
    addressLine: "string",
    emai: "string",
    verify: true,
    role: "USER",
  };

  const sendMessage = (newMessage) => {
    let roomChatId =
      selectedRoomChat?.id;

    const destination = `/app/${roomChatId}/sendMessage`;
    try {
      client?.publish({
        destination,
        body: JSON.stringify(
          newMessage
        ),
      });
    } catch (error) {
      console.error(
        "fail to send message" + error
      );
    }
  };

  const fetchMessages = async () => {
    let roomChatId =
      selectedRoomChat?.id;
    setIsLoading(true);
    const messages =
      await messageApi.getMessageList({
        accessToken,
        roomChatId,
      });
    setMessages(messages.content);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, [selectedRoomChat]);

  useEffect(() => {
    const onConnect = (client) => {
      client.subscribe(
        `/topic/${selectedRoomChat?.id}`,
        (message) => {
          try {
            const parsedMessage =
              JSON.parse(message.body);
            setMessages(
              (prevMessages) => [
                ...prevMessages,
                parsedMessage,
              ]
            );
          } catch (error) {
            console.error(
              "Error parsing message:",
              error
            );
          }
        }
      );
      setClient(client);
    };

    const onError = (error) => {
      console.error(
        "STOMP error:",
        error
      );
    };

    const stompClient =
      connectStompClient({
        onConnectCallback: onConnect,
        onErrorCallback: onError,
      });

    return () => {
      if (stompClient) {
        stompClient.deactivate();
      }
    };
  }, [selectedRoomChat]);

  return (
    <div className="flex flex-col justify-between w-full h-full">
      {isLoading ? (
        <Skeleton
          className={`rounded-2xl w-full h-screen flex justify-center items-center`}
        >
          <Spinner />
        </Skeleton>
      ) : (
        <>
          <ChatTopbar
            loggedUser={
              selectedRoomChat?.user
            }
          />
          <ChatList
            messages={messagesState}
            loggedUser={loggedUser}
            sendMessage={sendMessage}
            isMobile={isMobile}
          />
        </>
      )}
    </div>
  );
};

export default Chat;
