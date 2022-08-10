import { Box } from "@mui/material";

const ConfirmationButtons = ({ children }) => {
  return (
    <Box margin={"30px"} display={"flex"} justifyContent={"space-around"}>
      {children}
    </Box>
  );
};
export default ConfirmationButtons;
