import { Box, Typography } from "@mui/material";

const StatusBar = ({ open = false }) => {
  const container_sytles = {
    height: 100,
    backgroundColor: open ? "#9BD897" : "#E2A3A2",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    paddingLeft: 10,
  };
  const text_styles = {
    title: { variant: "subtitle1", fontWeight: 700, component: "h1" },
    subtitle: {
      variant: "caption",
    },
  };
  const texts = {
    title: open ? "Estas Abierto" : "Estas Cerrado.",
    subtitle: open
      ? "Tu Restaurante esta abierto hasta las 23:00 Hs."
      : "Tu restaurante esta Cerrado hasta las 19:00 Hs",
  };
  return (
    <Box {...container_sytles}>
      <Box>
        <Typography {...text_styles.title}>{texts.title}</Typography>
        <Typography {...text_styles.subtitle}>{texts.subtitle}</Typography>
      </Box>
    </Box>
  );
};
export default StatusBar;
