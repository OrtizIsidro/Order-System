import { Button, HStack, TextInput } from "@react-native-material/core";
import { useEffect, useRef, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { CartItems, CustomCheckBox, Efectivo, MercadoPago } from "./helper";
import { useNavigate } from "react-router-native";

const Payment = ({ cart, total, socket, navigation, requestOrder }) => {
  const [paymentMethod, setPaymentMethod] = useState("Efectivo");
  const [paymentAmount, setPaymentAmount] = useState(900);
  const navigate = useNavigate();
  const { delivery } = navigation;
  const form = useRef({
    nombre: "",
    calle: "",
    numeracion: "",
    referencias: "",
    entreCalles: "",
    cart,
    total,
    socketID: null,
    paymentAmount,
  });
  const handleOrder = (orderCart) => {
    requestOrder(orderCart);
    navigate(delivery);
  };

  useEffect(() => {
    if (!socket) return;
    const socketID = socket.id;
    form.current.socketID = socketID;
  }, [socket]);
  return (
    <ScrollView>
      <Text>Payment Screen</Text>
      <Text>nombre</Text>
      <TextInput onChangeText={(value) => (form.current.nombre = value)} />
      <Text>calle</Text>
      <TextInput onChangeText={(value) => (form.current.calle = value)} />
      <Text>numeracion</Text>
      <TextInput onChangeText={(value) => (form.current.numeracion = value)} />
      <Text>entre calles</Text>
      <TextInput onChangeText={(value) => (form.current.entreCalles = value)} />
      <Text>referencia</Text>
      <TextInput onChangeText={(value) => (form.current.referencias = value)} />
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
      <Button onPress={() => handleOrder(form.current)} title="test pedido" />
    </ScrollView>
  );
};
export default Payment;
