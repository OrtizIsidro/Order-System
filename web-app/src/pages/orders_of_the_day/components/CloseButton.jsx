import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const CloseButton = ({ onClick }) => {
  return (
    <IconButton
      style={{ position: "absolute", top: 0, right: 0, margin: "10px" }}
      onClick={onClick}
    >
      <CloseIcon />
    </IconButton>
  );
};
export default CloseButton;
