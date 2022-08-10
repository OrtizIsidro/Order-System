import { useEffect, useState } from "react";
import useWebsocket from "../../../hooks/useWebSocket";
const LOCALHOST = "http://192.168.5.198:3000";

const useOrders = () => {
  //SOCKET CONNECTION
  const { socket, connected } = useWebsocket(LOCALHOST);

  //STATES
  const [orders, setOrders] = useState([]);
  const [acceptedOrders, setAcceptedOrders] = useState([]);

  // HANLDERS
  const handleOrder = (socketID, accepted, order) => {
    console.log("run");
    socket.emit("isOrderAccepted", {
      socketID,
      accepted,
    });
    if (accepted === "accepted") setAcceptedOrders((prev) => [...prev, order]);
    setOrders((prev) => prev.filter((order) => order.socketID !== socketID));
  };

  useEffect(() => {
    if (connected)
      socket.on("new_order", (msg) => setOrders((prev) => [...prev, msg]));
  }, [connected, socket]);

  return [[orders, acceptedOrders], [handleOrder]]; // [[STATES], [HANDLERS]]
};
export default useOrders;
