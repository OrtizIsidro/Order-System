import Menu from "../../screens/menu";
import Cart from "../../screens/cart";
import Delivery from "../../screens/delivery";
import Payment from "../../screens/payment";
import useBackAction from "../../hooks/useBackAction";
import AppBar from "../../components/app_bar";
import useOrder from "../../hooks/useOrder";
import useTimer from "../../hooks/useTimer";
import useCart from "../../hooks/useCart";
import { Route, Routes } from "react-router-native";
const INITIAL_PATH = "/home";

const HomeRouter = ({ navigation, paths }) => {
  const { home, delivery, payment, cart: cart_path } = paths;
  const [orderTaken, orderRequested, accepted, orderHandlers] = useOrder();
  const [cart, total, cartHandlers] = useCart();
  const [requestOrder] = orderHandlers;
  const [subtractOne, addOne, remove] = cartHandlers;
  const [minutes, seconds] = useTimer(accepted);

  const CartProps = {
    navigation,
    total,
    subtractOneFromCart: subtractOne,
    addOneToCart: addOne,
    removeFromCart: remove,
    cart,
  };

  const PaymentProps = {
    connected,
    navigation,
    cart,
    total,
    setOrderRequested,
    requestOrder,
  };

  const DeliveryProps = {
    isOrderAccepted: accepted,
    orderRequested,
    orderTaken,
    minutes,
    seconds,
  };

  const MenuProps = {
    navigation,
    paths,
    addToCart: addOne,
  };

  useBackAction(INITIAL_PATH);
  return (
    <AppBar navigation={navigation}>
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
