const useCart = () => {
  const [cart, setCart] = useState([]);

  const subtractOneFromCart = (order) =>
    setCart((prev) => addHandler(prev, order));

  const addOneToCart = (order) =>
    setCart((prev) => addHandler(prev, order, true));

  const removeFromCart = (orderTitle) =>
    setCart((prev) => prev.filter(({ title }) => title !== orderTitle));

  const total = calculateTotal(cart);

  return [cart, total, [subtractOneFromCart, addOneToCart, removeFromCart]];
};
export default useCart;
