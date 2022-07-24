import { NativeRouter, Route, Routes } from "react-router-native";
import SplashScreenRouter from "./src/routes/routers/SplashScreenRouter";
import HomeRouter from "./src/routes/routers/HomeRouter";

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route index path="/*" element={<SplashScreenRouter />} />
        <Route path="/home/*" element={<HomeRouter />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;
