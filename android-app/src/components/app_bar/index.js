import TopAppBar from "./TopAppBar";
import BottomAppBar from "./BottomAppBar";
import { IconComponentProvider } from "@react-native-material/core";
import { StatusBar, StyleSheet, View } from "react-native";
import ModalOrderStatus from "../ModalOrderStatus";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useLocation } from "react-router-native";
import { useState } from "react";

const AppBar = ({ navigation, children, accepted, cart }) => {
  const { pathname } = useLocation();
  const { payment } = navigation;
  const [show, setShow] = useState(false);
  const isP = pathname !== payment;
  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <View style={styles.home_container}>
        <TopAppBar />
        <View style={styles.routes_container}>{children}</View>
        <BottomAppBar amount={cart.length} navigation={navigation} />
      </View>
      <ModalOrderStatus
        hide={() => setShow(false)}
        show={show}
        accepted={accepted}
        navigation={navigation}
      />
    </IconComponentProvider>
  );
};
export default AppBar;

const styles = StyleSheet.create({
  home_container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    zIndex: 10,
  },
  routes_container: { flex: 1 },
});
