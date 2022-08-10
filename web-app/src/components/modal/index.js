import { Box } from "@mui/material";
import CloseButton from "../../pages/orders_of_the_day/components/CloseButton";

const Modal = ({ children, show, closeModal }) => {
  return (
    <Box
      display={show ? "flex" : "none"}
      style={{
        position: "absolute",
        backgroundColor: "rgba(15, 6, 7, 0.6)",
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <Box
        display={"flex"}
        style={{
          width: "70%",
          height: "70%",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <CloseButton onClick={closeModal} />
        {children}
      </Box>
    </Box>
  );
};
export default Modal;
