import { Box, Typography } from "@mui/material";
import NoOrders from "./NoOrders";
import OrderOverview from "./OrderOverView";
import { global_styles } from "../../../lib/styles";

const OrderSection = ({ orders, children, openModal, title, component }) => {
  return (
    <Box flex={2} marginTop={7}>
      <Typography {...global_styles.text.primary}>{title}</Typography>
      {children}
      {orders.length > 0 ? (
        <OrderOverview
          orders={orders}
          accepted={component}
          openModal={openModal}
        />
      ) : (
        <NoOrders component={component} />
      )}
    </Box>
  );
};
export default OrderSection;
