import { Box } from "@mui/material";

const CenterItem = ({ children }) => (
  <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
    {children}
  </Box>
);
export default CenterItem;
