// import { Client } from "@stomp/stompjs";
import { API_PUBLIC_WEB_SOCKET_URL } from "@/constant";
// import { client } from "stompjs";
// import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import sockjs from "sockjs-client/dist/sockjs";

const brokerURL = API_PUBLIC_WEB_SOCKET_URL || "http://localhost:8080/ws";

const connectStompClient = ({ onConnectCallback, onErrorCallback }) => {
  const accessToken = JSON.parse(localStorage.getItem("token")).accessToken;
  const socket = sockjs(brokerURL);
  const stompClient = new Client({
    webSocketFactory: () => socket,
    connectHeaders: {
      ["Authorization"]: `Bearer ${accessToken}`,
    },
    reconnectDelay: 5000,
    onConnect: (frame) => {
      onConnectCallback(stompClient);
    },
    onStompError: (frame) => {
      console.error("Broker reported error: " + frame.headers["message"]);
      console.error("Additional details: " + frame.body);
      onErrorCallback(frame);
    },
  });
  stompClient.activate();

  return stompClient;
};

export default connectStompClient;
