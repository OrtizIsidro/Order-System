import { useEffect, useState } from "react";
import { SOCKET_URL } from "@env";
import useWebsocket from "../useWebSocket";

const useOrder = (connected, socket) => {
  const { socket, connected } = useWebsocket(SOCKET_URL);
  const [orderTaken, setOrderTaken] = useState(false);
  const [orderRequested, setOrderRequested] = useState(false);
  const response = useRef({});

  const requestOrder = (orderCart) => {
    socket.emit("order", orderCart);
  };

  useEffect(() => {
    if (connected)
      socket.on("responseToOrder", (res) => {
        response.current = res;
        setOrderTaken(true);
        setOrderRequested(false);
      });
  }, [connected, socket]);

  return [
    orderTaken,
    orderRequested,
    response.current.accepted,
    [requestOrder],
  ];
};
export default useOrder;
