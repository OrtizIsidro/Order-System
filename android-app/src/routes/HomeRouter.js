import Menu from "../screens/Menu";
import Cart from "../screens/Cart";
import Delivery from "../screens/Delivery";
import Payment from "../screens/payment";
import useBackAction from "../hooks/useBackAction";
import AppBar from "../components/app_bar";
import useOrder from "../hooks/useOrder";
import useCart from "../hooks/useCart";
import { Route, Routes } from "react-router-native";
import { paths } from "../data/navigation";
import ModalOrderStatus from "../components/ModalOrderStatus";
import Timer from "../components/Timer";
const INITIAL_PATH = "/home";

const HomeRouter = () => {
  const { home, delivery, payment, cart: cart_path } = paths;
  const [orderStates, orderHandlers] = useOrder();
  const [orderTaken, orderRequested, accepted, socketID] = orderStates;
  const [requestOrder] = orderHandlers;

  const [cartStates, cartHandlers] = useCart();
  const [cart, total] = cartStates;
  const [subtractOne, addOne, remove, addToCart] = cartHandlers;

  const CartProps = {
    total,
    subtractOneFromCart: subtractOne,
    addOneToCart: addOne,
    removeFromCart: remove,
    cart,
  };

  const PaymentProps = {
    cart,
    total,
    requestOrder,
    socketID,
  };

  const DeliveryProps = {
    isOrderAccepted: accepted,
    orderRequested,
    orderTaken,
    accepted,
    children: <Timer isOrderAccepted={accepted} orderTaken={orderTaken} />,
  };

  const MenuProps = {
    addToCart,
  };

  useBackAction(INITIAL_PATH);
  return (
    <AppBar length={cart.length}>
      <ModalOrderStatus showOn={orderTaken} accepted={accepted} />
      <Routes>
        <Route index path={home} element={<Menu {...MenuProps} />} />
        <Route path={cart_path} element={<Cart {...CartProps} />} />
        <Route path={delivery} element={<Delivery {...DeliveryProps} />} />
        <Route path={payment} element={<Payment {...PaymentProps} />} />
      </Routes>
    </AppBar>
  );
};

export default HomeRouter;
