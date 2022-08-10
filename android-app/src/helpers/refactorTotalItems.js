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
export default refactorTotalItems;
