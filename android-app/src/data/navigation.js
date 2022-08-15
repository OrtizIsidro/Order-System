const navigation = {
  home: "/home",
  specials: "/home/specials",
  cart: "/home/cart",
  delivery: "/home/delivery",
  payment: "/home/payment",
};
const paths = {
  home: "/*",
  delivery: "/delivery",
  cart: "/cart",
  payment: "/payment",
  specials: "/specials",
};
const routers = {
  root: "/*",
  home: "/home/*",
};
export { paths, routers, navigation };
