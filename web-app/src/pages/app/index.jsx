import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import useWebSocket from "../../hooks/useWebSocket";
import StatusBar from "../../components/status_bar";
import NewOrders from "../../components/new_orders";
import AcceptedOrders from "../../components/accepted_orders";
import SideNavBar from "../../components/side_bar";
import Divider from "../../components/divider";

function App() {
  const [orders, setOrders] = useState([]);
  const [acceptedOrders, setAcceptedOrders] = useState([]);
  const { socket, connected } = useWebSocket("http://192.168.5.198:3000");

  // HANLDERS
  const handleOrder = (socketID, accepted, order) => {
    console.log("run order", { socketID, accepted, order });
    socket.emit("isOrderAccepted", {
      socketID,
      accepted,
    });
    setAcceptedOrders((prev) => [...prev, order]);
    setOrders((prev) => prev.filter((order) => order.socketID !== socketID));
  };

  // PROPS HELPERS
  const orders_props = {
    orders,
    handleOrder,
  };

  useEffect(() => {
    if (connected)
      socket.on("new_order", (msg) => setOrders((prev) => [...prev, msg]));
  }, [connected, socket]);
  return (
    <Box height={"90%"}>
      <StatusBar open={true} />
      <Box display="flex" style={{ height: "100%", width: "100%" }}>
        <SideNavBar />
        <Box flex={6} margin={1} display={"flex"}>
          <NewOrders {...orders_props} />
          <Divider />
          <AcceptedOrders orders={acceptedOrders} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
