import { View, StatusBar } from "react-native";
import { calculateTotal, getMappedRoutes } from "../helper";
import { Routes } from "react-router-native";
import { getInitialPath } from "../../lib/helper";
import { IconComponentProvider } from "@react-native-material/core";
import { TopAppBar, BottomAppBar } from "../components/app_bar";
import useBackAction from "../../hooks/useBackAction";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";

function refactorTotalItems(cart, order, key) {
  let output = {};
  const all = [...cart, order];
  for (let i = 0; i < all.length; i++) {
    const id = all[i][key];
    const { amount } = all[i];
    if (output[id]) output[id]["amount"] += 1;
    else output[id] = { ...all[i], amount: amount || 1 };
  }
  return Object.values(output);
}

const addHandler = (prev, order, add) =>
  prev.map((item) =>
    item.title === order
      ? { ...item, amount: add === true ? item.amount + 1 : item.amount - 1 }
      : { ...item }
  );

const HomeRouter = () => {
  const initialPath = getInitialPath();
  const [cart, setCart] = useState([]);
  const routeComponentsProps = {
    Cart: {
      cart,
      total: calculateTotal(cart),
      removeOneFromCart: (order) =>
        setCart((prev) => addHandler(prev, order, false)),
      addOneToCart: (order) => setCart((prev) => addHandler(prev, order, true)),
    },
    HomeChild: {
      addToCart: (order) =>
        setCart((prev) => refactorTotalItems(prev, order, "title")),
    },
  };
  const mappedHomeRoutes = getMappedRoutes(initialPath, routeComponentsProps);
  useBackAction(initialPath);
  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <View style={{ marginTop: StatusBar.currentHeight, flex: 1 }}>
        <TopAppBar />
        <View style={{ flex: 1 }}>
          <Routes children={mappedHomeRoutes} />
        </View>
        <BottomAppBar amount={cart.length} />
      </View>
    </IconComponentProvider>
  );
};
export default HomeRouter;
