import { Button, Icon, IconButton } from "@react-native-material/core";
import { View, Text, FlatList } from "react-native";
import { Link, useNavigate } from "react-router-native";

const OrderInfo = ({ cart, total, removeOneFromCart, addOneToCart }) => {
  const navigate = useNavigate();
  return (
    <View style={{ margin: 10, flex: 1, marginBottom: 40 }}>
      {cart.length < 1 && (
        <Text style={{ fontSize: 16 }}>
          Aqui estaran los pedidos que agregues al carrito!
        </Text>
      )}
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <View
            style={{
              paddingVertical: 10,
              justifyContent: "space-around",
            }}
          >
            <Text>{item.title}</Text>
            <Text>{item.img}</Text>
            <Text>{item.price}</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", margin: 10 }}
            >
              <IconButton
                onPress={() => removeOneFromCart(item.title)}
                style={{
                  backgroundColor: "orange",
                }}
                icon={<Icon name="minus" color="white" size={20} />}
              />
              <Text style={{ paddingHorizontal: 15, fontSize: 18 }}>
                {item.amount}
              </Text>
              <IconButton
                onPress={() => addOneToCart(item.title)}
                style={{
                  backgroundColor: "orange",
                }}
                icon={<Icon name="plus" color="white" size={20} />}
              />
            </View>
          </View>
        )}
      />
      <Text>Total: {total}</Text>
      <Button
        onPress={() => navigate("/home/payment")}
        title="realizar el pedido"
      />
    </View>
  );
};
export default OrderInfo;
