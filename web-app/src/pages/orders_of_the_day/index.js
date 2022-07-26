import Divider from "../../components/divider";
import useOrders from "./hooks/useOrders";
import NewOrders from "./components/orders/New";
import AcceptedOrders from "./components/orders/Accepted";

const OrdersOfTheDay = () => {
  const [states, handlers] = useOrders();
  const [orders, acceptedOrders] = states;
  const [handleOrder, OrderOnTheWay] = handlers;
  return (
    <>
      <NewOrders orders={orders} handleOrders={handleOrder} />
      <Divider />
      <AcceptedOrders
        acceptedOrders={acceptedOrders}
        handleOrders={handleOrder}
        setOrderOnTheWay={OrderOnTheWay}
      />
    </>
  );
};

export default OrdersOfTheDay;
