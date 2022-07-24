import { Button, Icon, IconButton } from "@react-native-material/core";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";

const Cart = ({
  cart,
  total,
  subtractOneFromCart,
  addOneToCart,
  navigation,
  removeFromCart,
}) => {
  const { payment } = navigation;
  const cart_is_empty = cart.length < 1 && (
    <Text style={styles.empty_cart}>{styles.texts.empty_cart}</Text>
  );
  const navigate = useNavigate();
  const shouldIncrement = (item) => {
    if (item.amount > 1) return subtractOneFromCart(item.title);
    return removeFromCart(item.title);
  };

  return (
    <View style={{ margin: 10, flex: 1, marginBottom: 40 }}>
      {cart_is_empty}
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.title}</Text>
            <Text>{item.img}</Text>
            <Text>{item.price}</Text>
            <View style={styles.button_container}>
              <IconButton
                onPress={() => shouldIncrement(item)}
                style={styles.button}
                icon={<Icon {...styles.icon_minus} />}
              />
              <Text style={styles.text}>{item.amount}</Text>
              <IconButton
                onPress={() => addOneToCart(item.title)}
                style={styles.button}
                icon={<Icon {...styles.icon_plus} />}
              />
            </View>
          </View>
        )}
      />
      <Text>
        {styles.texts.total} {total}
      </Text>
      <Button
        onPress={() => navigate(payment)}
        title={styles.texts.button_title}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  button_container: { flexDirection: "row", alignItems: "center", margin: 10 },
  button: {
    backgroundColor: "orange",
  },
  icon_minus: {
    name: "minus",
    color: "white",
    size: 20,
  },
  icon_plus: {
    name: "plus",
    color: "white",
    size: 20,
  },
  empty_cart: { fontSize: 16 },
  text: { paddingHorizontal: 15, fontSize: 18 },
  texts: {
    button_title: "realizar el pedido",
    empty_cart: "Aqui estaran los pedidos que agregues al carrito!",
    total: "Total:",
  },
});
export default Cart;
