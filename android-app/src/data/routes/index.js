import { nanoid } from "nanoid";
import { Route } from "react-router-native";
import { menuData } from "../menu";
import Delivery from "../../screens/delivery";
import HomeMenu from "../../screens/home_menu";
import FlavorsMenu from "../../screens/home_menu/menu";
import OrderInfo from "../../screens/order_info";
import SplashScreen from "../../screens/splash_screen";
import Payment from "../../screens/payment";

const getRoutesData = (props = {}) => {
  const childRoutes = {
    getChildRoutes(parent) {
      return HomeChildRoutes(this[parent]);
    },
    "home-menu": [
      {
        link: {
          icon: "normal",
        },
        route: {
          path: "/*",
          index: true,
          element: (
            <FlavorsMenu data={menuData["clasics"]} {...props.HomeChild} />
          ),
        },
      },
      {
        link: {
          icon: "none",
        },
        route: {
          path: "/specials",
          exact: true,
          element: (
            <FlavorsMenu data={menuData["specials"]} {...props.HomeChild} />
          ),
        },
      },
    ],
    "home-cart": [],
  };

  const routes = {
    "/home": [
      {
        link: {
          icon: "home",
        },
        route: {
          path: "/*",
          index: true,
          element: (
            <HomeMenu
              childRoutes={childRoutes.getChildRoutes("home-menu")}
              {...props.HomeMenu}
            />
          ),
        },
      },
      {
        link: {
          icon: "cart",
        },
        route: {
          path: "/order-info",
          exact: true,
          element: (
            <OrderInfo
              childRoutes={childRoutes.getChildRoutes("home-cart")}
              {...props.Cart}
            />
          ),
        },
      },
      {
        link: {
          icon: "motorbike",
        },
        route: {
          path: "/delivery",
          exact: true,
          element: <Delivery {...props.Delivery} />,
        },
      },
      {
        link: {
          icon: "contactless-payment-circle",
        },
        route: {
          path: "/payment",
          exact: true,
          element: <Payment />,
        },
      },
    ],
    "/": [
      {
        link: { icon: "none" },
        route: { index: true, element: <SplashScreen {...props} /> },
      },
    ],
  };
  return routes;
};

function HomeChildRoutes(childRoutes) {
  return childRoutes.map(({ route }) => <Route {...route} key={nanoid()} />);
}
export { getRoutesData };
