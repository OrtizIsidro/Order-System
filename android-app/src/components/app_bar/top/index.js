import { AppBar, IconButton } from "@react-native-material/core";
import { StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
const TopAppBar = () => {
  return (
    <AppBar
      color={styles.color}
      title={styles.title}
      titleStyle={styles.text_style}
      trailing={<IconButton icon={<Icon {...styles.icon_magnify} />} />}
      leading={<IconButton icon={<Icon {...styles.icon_menu} />} />}
    />
  );
};
export default TopAppBar;


//styles / config
const styles = StyleSheet.create({
  icon_magnify: { name: "magnify", color: "white", size: 24 },
  icon_menu: { name: "menu", color: "white", size: 24 },
  title: "Pizzas Dany",
  text_style: { color: "white" },
  color: "black",
});
