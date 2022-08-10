import { Box, Chip, Divider, Typography } from "@mui/material";
import Modal from "../../../components/modal";
import OrderInfo from "../styles/OrderInfo";

const OrdersInfoModal = ({ children, show, closeModal }) => {
  return (
    <>
      <Modal show={show} closeModal={closeModal}>
        <Box flex={1} style={{ position: "relative" }} margin={"10px"}>
          <Box display={"flex"} justifyContent={"space-between"} margin={3}>
            <Box>
              <Typography variant={"h5"} fontWeight={600}>
                Pedido Nro. 00
              </Typography>
              <Typography>XXXXX-1234</Typography>
              <Chip
                label={"Pedido Reservado"}
                color={"warning"}
                size={"small"}
              />
            </Box>
            <Box>
              <Typography variant="subtitle1">
                <strong>14</strong> minutos
              </Typography>
            </Box>
          </Box>
          <Divider />
          <OrderInfo
            calle="salvador lentini"
            entreCalle="virrey aviles y virrey arredondo"
            numeracion="244"
            numero="1164778696"
          />
          {children}
        </Box>
        <Box
          flex={1}
          backgroundColor={"whitesmoke"}
          marginTop={4}
          borderRadius={4}
        >
          <Box>
            <Box display={"flex"} margin={4}>
              <Box width={"8%"}>
                <Typography>1x</Typography>
              </Box>
              <Box>
                <Typography>Pizza napolitana con jamon</Typography>
                <Box backgroundColor={"orange"} borderRadius={1} marginY={1}>
                  <Typography padding={1}>
                    los tomates deberian estar frescos cabrondeberian estar
                    frescos cabrondeberian estar frescos cabrondeberian estar
                  </Typography>
                </Box>
                <Typography>Amount</Typography>
              </Box>
            </Box>
            <Box display={"flex"}>
              <Typography variant="h6" fontWeight={600}>
                Total
              </Typography>
              <Box></Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default OrdersInfoModal;
