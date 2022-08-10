import { Button, Typography } from "@mui/material";
import { useRef } from "react";
import { useState } from "react";
import OrderSection from "../OrderSection";
import OrdersInfoModal from "../OrdersInfoModal";

const AcceptedOrders = ({ acceptedOrders, setOrderOnTheWay }) => {
  const [modal, setModal] = useState(false);
  const socketID_ref = useRef(null);
  const msg = useRef("nothing for now");
  const openModal = (socketID) => {
    socketID_ref.current = socketID;
    return setModal(true);
  };
  const closeModal = () => setModal(false);
  const handleOrderOnWay = () =>
    setOrderOnTheWay(socketID_ref.current, msg.current);

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
          color="success"
          onClick={handleOrderOnWay}
        >
          <Typography variant="h5">En Camino</Typography>
        </Button>
      </OrdersInfoModal>
    </OrderSection>
  );
};
export default AcceptedOrders;
