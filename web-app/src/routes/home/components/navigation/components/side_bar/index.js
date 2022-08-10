import { Box, Typography } from "@mui/material";
import NavigationTabs from "../NavigationTabs";

const SideNavBar = () => {
  return (
    <Box
      flex={1}
      display={"flex"}
      height={"100%"}
      flexDirection={"column"}
      borderRight={"2px solid #C2C2C2"}
    >
      <Box
        height={150}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography fontWeight={600}>Pizzas Dany</Typography>
      </Box>
      <NavigationTabs />
    </Box>
  );
};
export default SideNavBar;
