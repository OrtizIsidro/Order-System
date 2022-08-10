import { Box, Button, Typography } from "@mui/material";

const OrderOverview = ({ orders, accepted, openModal }) => {
  return orders.map((order, index) => (
    <Button
      variant="contained"
      key={index}
      style={{
        backgroundColor: accepted === "accepted" ? "green" : "#D4214E",
        marginRight: 50,
        padding: 10,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
      onClick={() => openModal(order.socketID, order)}
    >
      <Box width="100%" display={"flex"} justifyContent={"space-around"}>
        <Typography variant="h6" fontWeight={600}>
          {order.calle} {order.numeracion}
        </Typography>
        <Typography variant="h6" fontWeight={800}>
          x{order.cart.length}
        </Typography>
        <Typography variant="h6" fontWeight={600}>
          #50
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"space-around"} width={"100%"}>
        <Typography variant="caption" fontWeight={600}>
          Efectivo ${order.total}
        </Typography>
        <Typography variant="caption" fontWeight={600}>
          25 minutes
        </Typography>
      </Box>
    </Button>
  ));
};
export default OrderOverview;
