import { AppBar } from "@react-native-material/core";
import { StyleSheet } from "react-native";
const TopAppBar = () => {
  return (
    <AppBar
      color={styles.color}
      title={styles.title}
      titleStyle={styles.text_style}
    />
  );
};
export default TopAppBar;

//styles || config
const styles = StyleSheet.create({
  icon_magnify: { name: "magnify", color: "white", size: 24 },
  icon_menu: { name: "menu", color: "white", size: 24 },
  title: "Pizzas Dany",
  text_style: { color: "white" },
  color: "black",
});
