import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SideNavBar = () => {
  const navigate = useNavigate();
  const texts = ["Pedidos Del Dia", "Pedidos Recientes", "Menues", "Desempeño"];
  const links = ["orders_of_the_day", "recent_orders", "menues", "performance"];
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
      <Box flex={2} justifyContent={"space-between"} margin="0 20px">
        {texts.map((text, index) => (
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate(links[index])}
            key={index}
            style={{ margin: "2px 0" }}
          >
            {text}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
export default SideNavBar;
