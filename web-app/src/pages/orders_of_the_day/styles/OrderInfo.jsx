import { Box, Typography } from "@mui/material";
import Divider from "../../../components/divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
const OrderInfo = ({ calle, entreCalle, numeracion, numero }) => {
  return (
    <Box margin={2}>
      <Box display={"flex"}>
        <AccountCircleIcon />

        <Divider />
        <Box>
          <Typography>{calle}</Typography>
          <Typography>{entreCalle}</Typography>
          <Typography>{numeracion}</Typography>
        </Box>
      </Box>
      <Box display={"flex"}>
        <PhoneAndroidIcon />
        <Divider />
        <Typography variant="subtitle2">{numero}</Typography>
      </Box>
    </Box>
  );
};
export default OrderInfo;
