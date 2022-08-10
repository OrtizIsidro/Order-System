import { Typography } from "@mui/material";
import Modal from "../../../../../components/modal";

const AcceptedModal = ({ show, closeModal }) => {
  return (
    <Modal show={show} closeModal={closeModal}>
      <Typography variant="h1">hola</Typography>
    </Modal>
  );
};
export default AcceptedModal;
