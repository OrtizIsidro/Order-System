import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Menu from "../../screens/menu";
import Cart from "../../screens/order_info";
import Delivery from "../../screens/delivery";
import Payment from "../../screens/payment";
import useBackAction from "../../hooks/useBackAction";
import { useState } from "react";
import { Route, Routes } from "react-router-native";
import { View, StatusBar, StyleSheet } from "react-native";
import { asignPropsToMenuCategorys } from "./childs";
import { IconComponentProvider } from "@react-native-material/core";
import { TopAppBar, BottomAppBar } from "../../components/app_bar";
import {
  calculateTotal,
  MapRoutes,
  refactorTotalItems,
  addHandler,
} from "./helper";

const INITIAL_PATH = "/home";
const HomeRouter = ({ navigation, paths }) => {
  const [cart, setCart] = useState([]);
  const CartProps = {
    total: calculateTotal(cart),
    subtractOneFromCart: (order) => setCart((prev) => addHandler(prev, order)),
    addOneToCart: (order) => setCart((prev) => addHandler(prev, order, true)),
    removeFromCart: (order) =>
      setCart((prev) => prev.filter(({ title }) => title !== order)),
    cart,
  };
  const MenuProps = {
    addToCart: (order) =>
      setCart((prev) => refactorTotalItems(prev, order, "title")),
  };
  const flavor_categories = asignPropsToMenuCategorys({
    props: MenuProps,
    paths,
  });
  useBackAction(INITIAL_PATH);
  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <View style={styles.home_container}>
        <TopAppBar />
        <View style={styles.routes_container}>
          <Routes>
            <Route
              index
              path={paths.home}
              element={
                <Menu
                  navigation={navigation}
                  childRoutes={MapRoutes(flavor_categories)}
                />
              }
            />
            <Route
              path={paths.cart}
              element={<Cart {...CartProps} navigation={navigation} />}
            />
            <Route path={paths.delivery} element={<Delivery />} />
            <Route path={paths.payment} element={<Payment />} />
          </Routes>
        </View>
        <BottomAppBar amount={cart.length} navigation={navigation} />
      </View>
    </IconComponentProvider>
  );
};
const styles = StyleSheet.create({
  home_container: { marginTop: StatusBar.currentHeight, flex: 1 },
  routes_container: { flex: 1 },
});
export default HomeRouter;
