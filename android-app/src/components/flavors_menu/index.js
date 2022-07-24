import { Button } from "@react-native-material/core";
import { FlatList, Text, View } from "react-native";

const FlavorsMenu = ({ data, addToCart }) => {
  return (
    <FlatList
      style={{ marginBottom: 50 }}
      data={data}
      renderItem={({ item }) => (
        <View style={{ flex: 1, margin: 10 }}>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
          <Text>{item.img}</Text>
          <Text>botton de sumar al carrito, imaginatelo por ahora plis</Text>
          <Text>{item.precio}</Text>
          <Text>{item.puntaje}</Text>
          <Button
            title="añadir al pedido"
            onPress={() =>
              addToCart({
                title: item.title,
                price: item.precio,
                img: item.img,
              })
            }
          />
        </View>
      )}
    />
  );
};
export default FlavorsMenu;
