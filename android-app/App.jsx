import { NativeRouter, Route, Routes } from "react-router-native";
import { HomeRouter } from "./src/routes";
import SplashScreen from "./src/screens/splash_screen";

const App = () => {
  const navigation = {
    home: "/home",
    specials: "/home/specials",
    cart: "/home/cart",
    delivery: "/home/delivery",
    payment: "/home/payment",
  };
  const paths = {
    home: "/*",
    delivery: "/delivery",
    cart: "/cart",
    payment: "/payment",
    specials: "/specials",
  };
  const routers = {
    root: "/*",
    home: "/home/*",
  };
  return (
    <NativeRouter>
      <Routes>
        <Route index path={routers.root} element={<SplashScreen />} />
        <Route
          path={routers.home}
          element={<HomeRouter navigation={navigation} paths={paths} />}
        />
      </Routes>
    </NativeRouter>
  );
};

export default App;
