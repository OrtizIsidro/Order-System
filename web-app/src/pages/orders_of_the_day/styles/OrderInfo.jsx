import { Box, Typography } from "@mui/material";
import Divider from "../../../components/divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
const OrderInfo = ({ calle, entreCalle, numeracion, numero }) => {
  return (
    <Box margin={2}>
      <Box display={"flex"}>
        <Box>
          <AccountCircleIcon />
        </Box>
        <Divider />
        <Box>
          <Typography>{calle}</Typography>
          <Typography>{entreCalle}</Typography>
          <Typography>{numeracion}</Typography>
        </Box>
      </Box>
      <Box display={"flex"}>
        <Box>
          <PhoneAndroidIcon />
        </Box>
        <Divider />
        <Box>
          <Typography variant="subtitle2">{numero}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default OrderInfo;
