import { useRef, useState } from "react";
import OrdersInfoModal from "../OrdersInfoModal";
import OrderSection from "../OrderSection";
import ButtonsSections from "../../styles/ButtonsSections";
import TimeButtons from "../../styles/TimeButtons";
import ConfirmationButtons from "../../styles/ConfirmButtons";
import ActionButton from "../../styles/ConfirmationButton";
import Buttons from "../Buttons";
import CustomDialog from "../CustomDialog";
import { Paper, Typography } from "@mui/material";

const NewOrders = ({ orders, handleOrders }) => {
  const [modal, setModal] = useState(false);
  const [dialog, setDialog] = useState(false);
  const order_state_ref = useRef(null);

  const showDialog = () => setDialog(true);
  const closeDialog = () => setDialog(false);

  const showModal = (socketID, order) => {
    order_state_ref.current = {
      socketID,
      order,
    };
    return setModal(true);
  };
  const closeModal = () => setModal(false);

  const handleOrder = (accepted) => {
    const { socketID, order } = order_state_ref.current;
    if (dialog) closeDialog();
    if (modal) closeModal();
    return handleOrders(socketID, accepted, order);
  };

  const declineOrder = () => handleOrder("declined");
  const confirmOrder = () => handleOrder("accepted");
  const handleTime = (time) => console.log(time);

  return (
    <>
      <CustomDialog
        title="Rechazar el pedido?"
        onDecline={declineOrder}
        onClose={closeDialog}
        open={dialog}
        buttons={["Confirmar", "Cancelar"]}
      >
        Estas a punto de Rechazar un pedido <strong>Estas seguro?</strong>
      </CustomDialog>
      <OrderSection
        title="Nuevos"
        orders={orders}
        component="new"
        openModal={showModal}
      >
        <OrdersInfoModal closeModal={closeModal} show={modal}>
          <ButtonsSections>
            <Paper elevation={7} style={{ backgroundColor: "whitesmoke" }}>
              <Typography
                variant="body1"
                fontWeight={600}
                color={"green"}
                margin={1}
              >
                Selecciona el tiempo de entrega
              </Typography>
              <TimeButtons>
                <Buttons handleClick={handleTime} />
              </TimeButtons>
              <ConfirmationButtons>
                <ActionButton
                  accept
                  onClick={confirmOrder}
                  content="Confirmar"
                />
                <ActionButton onClick={showDialog} content="Rechazar" />
              </ConfirmationButtons>
            </Paper>
          </ButtonsSections>
        </OrdersInfoModal>
      </OrderSection>
    </>
  );
};
export default NewOrders;
