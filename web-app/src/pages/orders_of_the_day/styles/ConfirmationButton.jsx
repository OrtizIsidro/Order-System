import { Button } from "@mui/material";

const ConfirmationButton = ({ accept, children, onClick, content }) => {
  return (
    <Button
      style={{ padding: "10px" }}
      variant="contained"
      color={accept ? "success" : "error"}
      onClick={onClick}
    >
      {content}
      {children}
    </Button>
  );
};
export default ConfirmationButton;
