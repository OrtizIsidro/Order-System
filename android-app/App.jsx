import { NativeRouter, Route, Routes } from "react-router-native";
import { HomeRouter } from "./src/routes";
import SplashScreen from "./src/screens/SplashScreen";
import { routers } from "./src/data/navigation";

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route index path={routers.root} element={<SplashScreen />} />
        <Route path={routers.home} element={<HomeRouter />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
