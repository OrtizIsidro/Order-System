import { nanoid } from "nanoid";
import { Route } from "react-router-native";
import { getRoutesData } from "../data/routes";

const getMappedRoutes = (from, props = {}) => {
  return getRoutesData(props)[from].map(({ route }) => (
    <Route {...route} key={nanoid()} />
  ));
};

const calculateTotal = (cart) => {
  let envio = 150;
  let total = 0;
  const prices = cart.map((order) => order.price * order.amount);
  for (let i = 0; i < prices.length; i++) total += prices[i];
  return total + envio;
};
export { getMappedRoutes, calculateTotal };
