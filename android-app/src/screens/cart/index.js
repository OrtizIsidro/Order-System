import { Button, Icon, IconButton } from "@react-native-material/core";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
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
  const cart_is_empty = cart.length < 1;
  const navigate = useNavigate();
  const shouldRemove = ({ amount, title }) => {
    if (amount > 1) return subtractOneFromCart(title);
    return removeFromCart(title);
  };

  return (
    <View style={{ margin: 10, flex: 1, marginBottom: 40 }}>
      {cart_is_empty && (
        <Text style={styles.empty_cart}>{styles.texts.empty_cart}</Text>
      )}
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.title}</Text>
            <Image style={{ width: 150, height: 150 }} source={item.img} />
            <Text>{item.price}</Text>
            <View style={styles.button_container}>
              {/* SUBTRACT BUTTON */}
              <IconButton
                onPress={() => shouldRemove(item)}
                style={styles.button}
                icon={<Icon {...styles.icon_minus} />}
              />
              <Text style={styles.text}>{item.amount}</Text>

              {/* INCREMENT BUTTON */}
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
        disabled={cart_is_empty ? true : false}
        onPress={() => navigate(payment)}
        title={styles.texts.button_title}
      />
    </View>
  );
};
export default Cart;

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
