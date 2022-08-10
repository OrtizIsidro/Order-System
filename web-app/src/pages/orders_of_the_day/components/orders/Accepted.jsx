import { Button, Typography } from "@mui/material";
import { useState } from "react";
import OrderSection from "../OrderSection";
import OrdersInfoModal from "../OrdersInfoModal";

const AcceptedOrders = ({ acceptedOrders, handleOrders }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <OrderSection
      title="Aceptados"
      orders={acceptedOrders}
      openModal={openModal}
      component="accepted"
    >
      <OrdersInfoModal show={modal} closeModal={closeModal}>
        <Button
          variant="contained"
          style={{
            position: "absolute",
            bottom: 10,
            right: "40%",
          }}
          size="large"
        >
          <Typography variant="h5">En Camino</Typography>
        </Button>
      </OrdersInfoModal>
    </OrderSection>
  );
};
export default AcceptedOrders;
