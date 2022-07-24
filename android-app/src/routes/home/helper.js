import { Route } from "react-router-native";
import "react-native-get-random-values";
import { nanoid } from "nanoid";

const calculateTotal = (cart) => {
  let envio = 150;
  let total = 0;
  const prices = cart.map((order) => order.price * order.amount);
  for (let i = 0; i < prices.length; i++) total += prices[i];
  return total + envio;
};

const addHandler = (prev, order, add = false) =>
  prev.map((item) =>
    item.title === order
      ? { ...item, amount: add === true ? item.amount + 1 : item.amount - 1 }
      : { ...item }
  );

const refactorTotalItems = (cart, order, key) => {
  let output = {};
  const all = [...cart, order];
  for (let i = 0; i < all.length; i++) {
    const id = all[i][key];
    const { amount } = all[i];
    if (output[id]) output[id]["amount"] += 1;
    else output[id] = { ...all[i], amount: amount || 1 };
  }
  return Object.values(output);
};

const MapRoutes = (data) => {
  return data.map((route) => <Route {...route} key={nanoid()} />);
};
export { addHandler, MapRoutes, calculateTotal, refactorTotalItems };
