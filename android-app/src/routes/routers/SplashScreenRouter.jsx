import { View } from "react-native";
import { Routes } from "react-router-native";
import { getMappedRoutes } from "../helper";

const SplashScreenRouter = () => {
  const routes = getMappedRoutes();
  return (
    <View style={{ flex: 1 }}>
      <Routes children={routes} />
    </View>
  );
};
export default SplashScreenRouter;
