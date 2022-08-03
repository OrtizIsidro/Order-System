import { Box, Typography } from "@mui/material";

const TakenOrders = ({ orders }) => {
  return orders.map((order) => (
    <Box>
      <Typography>{order.title}</Typography>
    </Box>
  ));
};
export default TakenOrders;
