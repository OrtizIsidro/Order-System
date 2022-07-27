import { Button, HStack, TextInput } from "@react-native-material/core";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import useWebsocket from "../../hooks/useWebSocket";
import { CartItems, CustomCheckBox, Efectivo, MercadoPago } from "./helper";
import { SOCKET_URL } from "@env";

const Payment = ({ cart }) => {
  const [paymentMethod, setPaymentMethod] = useState("Efectivo");
  const [paymentAmount, setPaymentAmount] = useState();
  const [value, setValue] = useState("");
  const { socket, connected } = useWebsocket(SOCKET_URL);
  if (connected) socket.on("chat", (msg) => setValue(msg));
  return (
    <ScrollView>
      <Text>Payment Screen</Text>
      <Text>nombre</Text>
      <TextInput onChangeText={(value) => socket.emit("chat", value)} />
      <Text>calle</Text>
      <TextInput value={value} />
      <Text>numeracion</Text>
      <TextInput />
      <Text>entre calles</Text>
      <TextInput />
      <Text>referencia</Text>
      <TextInput />
      <View style={{ minHeight: 150, padding: 10, marginTop: 10 }}>
        <CustomCheckBox
          currentActive={paymentMethod}
          handler={(method) => setPaymentMethod(method)}
          options={["Efectivo", "Mercado Pago"]}
        />
        {paymentMethod === "Efectivo" ? (
          <Efectivo setAmount={(amount) => setPaymentAmount(amount)} />
        ) : (
          <MercadoPago />
        )}
      </View>
      <HStack>
        <CartItems items={cart} />
      </HStack>
      {paymentMethod == "Efectivo" ? (
        <View>
          <Button title="Confirmar" />
          <Button title="Cancelar" />
        </View>
      ) : (
        <Button title="Link de Pago" />
      )}
    </ScrollView>
  );
};
export default Payment;
