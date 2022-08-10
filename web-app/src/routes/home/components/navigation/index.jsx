import { Box } from "@mui/material";
import StatusBar from "./components/status_bar";
import SideNavBar from "./components/side_bar";

function Navigation({ children }) {
  return (
    <Box height={"90%"}>
      <StatusBar open={true} />
      <Box display="flex" style={{ height: "100%", width: "100%" }}>
        <SideNavBar />
        <Box flex={6} margin={1} display={"flex"}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default Navigation;
