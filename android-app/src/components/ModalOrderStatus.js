import { Button, Snackbar } from "@react-native-material/core";
import { useEffect } from "react";
import { useState } from "react";
import { View, StatusBar } from "react-native";
import { useNavigate } from "react-router-native";
import { navigation } from "../data/navigation";
const { delivery } = navigation;

const ModalOrderStatus = ({ accepted = false, showOn }) => {
  const [show, setShow] = useState(showOn);
  const ACCEPTED_COLOR_BUTTON = "rgb(17, 152, 34)";
  const ACCEPTED_COLOR_SNACKBAR = "rgb(35, 95, 28)";
  const DENIED_COLOR_BUTTON = "rgb(249, 132, 77)";
  const DENIED_COLOR_SNACKBAR = "rgb(217, 74, 8)";
  const navigate = useNavigate();
  const accepted_order = accepted === "accepted";
  useEffect(() => {
    if (showOn) setShow(true);
  }, [showOn]);
  return (
    <View
      style={{
        position: "absolute",
        top: StatusBar.currentHeight + 1,
        width: "100%",
        display: show ? "flex" : "none",
        zIndex: 100,
      }}
    >
      <Snackbar
        message={
          accepted_order
            ? "tu pedido fue Aceptado"
            : "no pudimos tomar tu pedido"
        }
        action={
          <Button
            onPress={() => {
              navigate(delivery);
              setShow(false);
            }}
            title="entendido"
            variant="text"
            color="white"
            style={{
              backgroundColor: accepted_order
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
          backgroundColor: accepted_order
            ? ACCEPTED_COLOR_SNACKBAR
            : DENIED_COLOR_SNACKBAR,
        }}
      />
    </View>
  );
};
export default ModalOrderStatus;
