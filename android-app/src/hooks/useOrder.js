import { useEffect, useState, useRef } from "react";
import { SOCKET_URL } from "@env";
import useWebsocket from "./useWebSocket";

const useOrder = () => {
  const { socket, connected } = useWebsocket(SOCKET_URL);
  const [orderTaken, setOrderTaken] = useState(false);
  const [orderRequested, setOrderRequested] = useState(false);
  const response = useRef({});
  const socketID = useRef();

  const requestOrder = (orderCart) => {
    setOrderRequested(true);
    socket.emit("order", orderCart);
  };

  useEffect(() => {
    if (connected)
      socket.on("responseToOrder", (res) => {
        response.current = res;
        setOrderTaken(true);
        setOrderRequested(false);
      });
    if (socket) socketID.current = socket.id;
  }, [connected, socket]);

  return [
    [orderTaken, orderRequested, response.current.accepted, socketID.current],
    [requestOrder],
  ];
};
export default useOrder;
