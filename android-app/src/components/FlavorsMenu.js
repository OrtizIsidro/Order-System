import { Button } from "@react-native-material/core";
import { FlatList, Text, View, Image } from "react-native";

const FlavorsMenu = ({ data, addToCart }) => {
  const DEFAULT_IMAGE = require("../assets/menu_images/muzzarella.jpg");
  return (
    <FlatList
      style={{ marginBottom: 50 }}
      data={data}
      renderItem={({ item }) => (
        <View style={{ flex: 1, margin: 20 }}>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
          <Image
            style={{
              width: 300,
              height: 300,
              alignSelf: "center",
              marginVertical: 10,
            }}
            source={item.img || DEFAULT_IMAGE}
          />
          <Text>{item.precio}</Text>
          <Text>{item.puntaje}</Text>
          <Button
            title="añadir al pedido"
            onPress={() =>
              addToCart({
                title: item.title,
                price: item.precio,
                img: item.img || DEFAULT_IMAGE,
              })
            }
          />
        </View>
      )}
    />
  );
};
export default FlavorsMenu;
