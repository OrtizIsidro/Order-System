import "react-native-get-random-values";
import { Icon } from "@react-native-material/core";
import { useNavigate } from "react-router-native";
import { getRoutesData } from "../../../data/routes/index";

const getLinksData = (from, props = {}) => {
  const navigate = useNavigate();
  const links = getRoutesData()[from];
  const linksData = links.map(({ link, route }) => ({
    onPress: () => navigate(from + route.path),
    icon: <Icon name={link.icon} {...props} />,
  }));
  return linksData;
};

export { getLinksData };
