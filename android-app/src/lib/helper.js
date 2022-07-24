import { useLocation } from "react-router-native";

const getInitialPath = () => {
  const { pathname } = useLocation();
  return "/" + pathname.split("/")[1];
};
export { getInitialPath };
