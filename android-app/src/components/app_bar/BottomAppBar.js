import { AppBar, Chip, Icon, IconButton } from "@react-native-material/core";
import { StyleSheet, Text, View } from "react-native";
import { useNavigate } from "react-router-native";

const BottomAppBar = ({ amount, navigation }) => {
  const { home, delivery, cart } = navigation;
  const navigate = useNavigate();
  return (
    <View>
      <AppBar
        style={styles.head}
        {...styles.appbar_head}
        leading={
          <View>
            <Chip
              {...styles.chip_head}
              style={styles.chip}
              label={<Text>{amount}</Text>}
            />
            <IconButton
              onPress={() => navigate(cart)}
              icon={<Icon {...styles.icon_cart} {...styles.icons} />}
              style={styles.iconButton}
            />
          </View>
        }
        trailing={
          <IconButton
            onPress={() => navigate(delivery)}
            icon={<Icon {...styles.icon_delivery} {...styles.icons} />}
            style={styles.iconButton}
          />
        }
        children={
          <IconButton
            onPress={() => navigate(home)}
            icon={<Icon {...styles.icon_home} {...styles.icons} />}
            style={styles.active}
          />
        }
      />
    </View>
  );
};
export default BottomAppBar;

const styles = StyleSheet.create({
  head: { paddingHorizontal: 50 },
  iconButton: {
    backgroundColor: "#4E4F50",
  },
  active: {
    backgroundColor: "#4E4F50",
    position: "absolute",
    top: -28,
    alignSelf: "center",
  },
  chip: { position: "absolute", zIndex: 1, top: -15, right: -15 },
  appbar_head: {
    color: "black",
    variant: "bottom",
  },
  chip_head: {
    color: "orange",
  },
  icons: {
    size: 24,
    color: "white",
  },
  icon_delivery: {
    name: "motorbike",
  },
  icon_home: {
    name: "home",
  },
  icon_cart: {
    name: "cart",
  },
});
