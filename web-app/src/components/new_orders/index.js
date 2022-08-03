import { Box, Typography } from "@mui/material";
import NoOrders from "../../components/no_orders";
import OrderOverview from "../../components/order_overview";
import { global_styles } from "../../lib/styles";

const NewOrders = ({ orders, handleOrder }) => {
  return (
    <Box flex={2} marginTop={7}>
      <Typography {...global_styles.text.primary}>Nuevos</Typography>
      {orders.length > 0 ? (
        <OrderOverview
          orders={orders}
          accepted={false}
          handleOrder={handleOrder}
        />
      ) : (
        <NoOrders component="new" />
      )}
    </Box>
  );
};
export default NewOrders;
