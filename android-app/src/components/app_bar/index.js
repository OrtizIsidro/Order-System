import { IconComponentProvider } from "@react-native-material/core";
import { StatusBar, StyleSheet, View } from "react-native";
import { useLocation } from "react-router-native";
import { navigation } from "../../data/navigation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import BottomAppBar from "./BottomAppBar";
import TopAppBar from "./TopAppBar";

const AppBar = ({ children, length }) => {
  const { pathname } = useLocation();
  const { payment } = navigation;
  const isPayment = pathname !== payment;
  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <View style={styles.home_container}>
        <TopAppBar />
        <View style={styles.routes_container}>{children}</View>
        <BottomAppBar amount={length} show={isPayment} />
      </View>
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
