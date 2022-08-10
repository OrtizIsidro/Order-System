import { Box } from "@mui/material";

const SpaceBetween = ({ children }) => (
  <Box display={"flex"} justifyContent={"space-between"} marginX={3}>
    {children}
  </Box>
);
export default SpaceBetween;
