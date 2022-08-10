import { Box } from "@mui/material";

const TimeButtons = ({ children }) => {
  return (
    <Box
      style={{
        backgroundColor: "whitesmoke",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        flexWrap: "wrap",
        margin: 10,
      }}
    >
      {children}
    </Box>
  );
};
export default TimeButtons;
