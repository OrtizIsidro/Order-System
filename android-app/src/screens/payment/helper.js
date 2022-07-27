import {
  Button,
  Icon,
  IconButton,
  TextInput,
} from "@react-native-material/core";
import { Pressable, Text, View } from "react-native";
import { nanoid } from "nanoid";
import CheckBox from "expo-checkbox";

const CartItems = ({ items }) => {
  return items.map((item) => (
    <View key={nanoid()} style={{ padding: 20 }}>
      <Text>{item.title}</Text>
      <IconButton icon={<Icon name="cancel" />} />
    </View>
  ));
};
const MercadoPago = () => {
  return (
    <View>
      <Text>
        Aca te dejamos el link de pago, cuando el pago este realizado, se nos
        notificara automaticamente!
      </Text>
    </View>
  );
};

const Efectivo = ({ setAmount }) => {
  return (
    <View>
      <Text>Con cuanto pagas?</Text>
      <TextInput onChangeText={(value) => setAmount(value)} />
    </View>
  );
};
const CustomCheckBox = ({ options, handler, currentActive }) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      {options.map((value) => (
        <Button
          title={value}
          key={nanoid()}
          onPress={() => handler(value)}
          leading={
            <CheckBox
              disabled={false}
              value={currentActive === value}
              onValueChange={() => handler(value)}
            />
          }
        />
      ))}
    </View>
  );
};
export { CartItems, MercadoPago, Efectivo, CustomCheckBox };
