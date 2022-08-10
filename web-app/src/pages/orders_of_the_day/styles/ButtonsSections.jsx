import { Box } from "@mui/material";

const ButtonsSections = ({ children }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-end"}
      position={"absolute"}
      bottom={0}
      width="100%"
    >
      {children}
    </Box>
  );
};
export default ButtonsSections;
