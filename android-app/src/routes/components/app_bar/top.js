import { AppBar, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const TopAppBar = () => {
  return (
    <AppBar
      color="black"
      title="Pizzas Dany"
      titleStyle={{ color: "white" }}
      trailing={
        <IconButton icon={<Icon name="magnify" color="white" size={24} />} />
      }
      leading={
        <IconButton icon={<Icon name="menu" color="white" size={24} />} />
      }
    />
  );
};
export default TopAppBar;
