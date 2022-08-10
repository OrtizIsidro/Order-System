import { Button, Snackbar } from "@react-native-material/core";
import { View, StatusBar } from "react-native";
import { useNavigate } from "react-router-native";

const ModalOrderStatus = ({
  show,
  accepted = false,
  hide,
  navigation: { delivery },
}) => {
  const ACCEPTED_COLOR_BUTTON = "rgb(17, 152, 34)";
  const ACCEPTED_COLOR_SNACKBAR = "rgb(35, 95, 28)";
  const DENIED_COLOR_BUTTON = "rgb(249, 132, 77)";
  const DENIED_COLOR_SNACKBAR = "rgb(217, 74, 8)";
  const navigate = useNavigate();
  return (
    <View
      style={{
        position: "absolute",
        top: StatusBar.currentHeight * 3,
        width: "100%",
        display: show ? "flex" : "none",
      }}
    >
      <Snackbar
        message={
          accepted ? "tu pedido fue Aceptado" : "no pudimos tomar tu pedido"
        }
        action={
          <Button
            onPress={() => {
              navigate(delivery);
              hide();
            }}
            title="entendido"
            variant="text"
            color="white"
            style={{
              backgroundColor: accepted
                ? ACCEPTED_COLOR_BUTTON
                : DENIED_COLOR_BUTTON,
            }}
          />
        }
        style={{
          position: "absolute",
          start: 16,
          end: 16,
          bottom: 0,
          backgroundColor: accepted
            ? ACCEPTED_COLOR_SNACKBAR
            : DENIED_COLOR_SNACKBAR,
        }}
      />
    </View>
  );
};
export default ModalOrderStatus;
