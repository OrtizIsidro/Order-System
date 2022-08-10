import { useState } from "react";
import addHandler from "../helpers/addHandler";
import calculateTotal from "../helpers/calculateTotal";
import refactorTotalItems from "../helpers/refactorTotalItems";

const useCart = () => {
  const [cart, setCart] = useState([]);

  const subtractOneFromCart = (order) =>
    setCart((prev) => addHandler(prev, order));

  const addOneToCart = (order) =>
    setCart((prev) => addHandler(prev, order, true));

  const removeFromCart = (orderTitle) =>
    setCart((prev) => prev.filter(({ title }) => title !== orderTitle));

  const addToCart = (order) =>
    setCart((prev) => refactorTotalItems(prev, order, "title"));

  const total = calculateTotal(cart);

  return [
    cart,
    total,
    [subtractOneFromCart, addOneToCart, removeFromCart, addToCart],
  ];
};
export default useCart;
