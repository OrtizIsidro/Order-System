import {
  Button,
  HStack,
  Icon,
  IconButton,
  TextInput,
} from "@react-native-material/core";
import { Text, View } from "react-native";
import { nanoid } from "nanoid";
import "react-native-get-random-values";
import CheckBox from "expo-checkbox";

const CartItems = ({ items }) => {
  return items.map((item) => (
    <HStack key={nanoid()} style={{ padding: 20, alignItems: "center" }}>
      <Text>{item.title}</Text>
      <IconButton icon={<Icon name="close" size={14} />} />
    </HStack>
  ));
};

const MercadoPago = () => {
  return (
    <View>
      <Text>
        Aca te dejamos el link de pago, cuando el pago este realizado, se nos
        notificara automaticamente!
      </Text>
      <Button title="link de pago" />
    </View>
  );
};

const Efectivo = ({ setAmount }) => {
  return (
    <View>
      <Text>Con cuanto pagas?</Text>
      <TextInput onChangeText={(value) => setAmount(value)} />
      <HStack>
        <Button title="Confirmar" />
        <Button title="Cancelar" />
      </HStack>
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
