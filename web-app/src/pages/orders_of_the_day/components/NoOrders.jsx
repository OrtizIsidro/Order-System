import { Box, Paper, Typography } from "@mui/material";

const NoOrders = ({ component }) => {
  const texts = {
    new: "No hay nuevos pedidos",
    accepted: "No hay pedidos aceptados",
  };
  return (
    <Paper elevation={3}>
      <Box
        width={"100%"}
        height={73}
        backgroundColor={"#C2C2C2"}
        borderRadius={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant="overline" fontWeight={600}>
          {texts[component]}
        </Typography>
      </Box>
    </Paper>
  );
};
export default NoOrders;
