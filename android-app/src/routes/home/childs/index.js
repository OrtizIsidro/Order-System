import { menu_data } from "../../../data/menu";
import FlavorsMenu from "../../../components/flavors_menu";

export const asignPropsToMenuCategorys = ({ props, paths }) => [
  {
    index: true,
    element: <FlavorsMenu data={menu_data.clasics} {...props} />,
  },
  {
    path: paths.specials,
    element: <FlavorsMenu data={menu_data.specials} {...props} />,
  },
];
