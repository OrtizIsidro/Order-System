import { Route, Routes } from "react-router";
import Navigation from "./components/navigation";
import Menues from "../../pages/menues";
import OrdersOfTheDay from "../../pages/orders_of_the_day";
import Performance from "../../pages/performance";
import RecentOrders from "../../pages/recent_orders";

const Home = () => {
  return (
    <Navigation>
      <Routes>
        <Route index element={<OrdersOfTheDay />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/menues" element={<Menues />} />
        <Route path="/recent_orders" element={<RecentOrders />} />
      </Routes>
    </Navigation>
  );
};
export default Home;
