import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/app";
import OrdersOfTheDay from "./pages/orders_of_the_day";
import RecentOrders from "./pages/recent_orders";
import Menues from "./pages/menues";
import Performance from "./pages/performance";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/orders_of_the_day" element={<OrdersOfTheDay />} />
        <Route path="/recent_orders" element={<RecentOrders />} />
        <Route path="/Menues" element={<Menues />} />
        <Route path="/performance" element={<Performance />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Root;
