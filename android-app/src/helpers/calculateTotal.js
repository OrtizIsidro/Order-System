const calculateTotal = (cart) => {
  let envio = 150;
  let total = 0;
  const prices = cart.map((order) => order.price * order.amount);
  for (let i = 0; i < prices.length; i++) total += prices[i];
  return total + envio;
};

export default calculateTotal;
