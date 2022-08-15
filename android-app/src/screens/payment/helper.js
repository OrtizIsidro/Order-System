import {
  Box,
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
import TextField from "../../components/TextField";

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

const Efectivo = ({ setAmount, handleConfirm, handleCancel }) => {
  return (
    <View>
      <TextField
        label="Con cuanto pagas?"
        onChangeText={(value) => setAmount(value)}
      />
      <HStack spacing={"auto"} style={{ marginHorizontal: 20 }}>
        <Button title="Confirmar" onPress={handleConfirm} />
        <Button title="Cancelar" onPress={handleCancel} />
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
const TextFields = ({ form }) => {
  const textFields = [
    "nombre",
    "calle",
    "numeracion",
    "entre calles",
    "referencias",
  ];
  const values = {
    "entre calles": "entreCalles",
  };
  return textFields.map((text) => {
    const formValue = values[text] ? values[text] : text;
    return (
      <Box key={nanoid()}>
        <TextField
          label={text}
          onChangeText={(value) => (form[formValue] = value)}
        />
      </Box>
    );
  });
};
export { CartItems, MercadoPago, Efectivo, CustomCheckBox, TextFields };
