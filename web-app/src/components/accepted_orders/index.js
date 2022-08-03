import { Box, Typography } from "@mui/material";
import NoOrders from "../../components/no_orders";
import OrderOverview from "../../components/order_overview";
import { global_styles } from "../../lib/styles";

const AcceptedOrders = ({ orders }) => {
  return (
    <Box flex={2} marginTop={7}>
      <Typography {...global_styles.text.primary}>Aceptados</Typography>
      {orders.length > 0 ? (
        <OrderOverview orders={orders} accepted={true} />
      ) : (
        <NoOrders component={"accepted"} />
      )}
    </Box>
  );
};
export default AcceptedOrders;
