const addHandler = (prev, order, add = false) =>
  prev.map((item) =>
    item.title === order
      ? { ...item, amount: add === true ? item.amount + 1 : item.amount - 1 }
      : { ...item }
  );
export default addHandler;
