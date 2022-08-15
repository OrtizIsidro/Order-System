import { HStack } from "@react-native-material/core";
import { useRef } from "react";
import { ScrollView, Text } from "react-native";
import { CartItems, TextFields } from "./helper";
import PaymentMethod from "./PaymentMethods";

const Payment = ({ cart, total, socketID, requestOrder }) => {
  const form = useRef({
    nombre: "",
    calle: "",
    numeracion: "",
    referencias: "",
    entreCalles: "",
    cart,
    total,
    socketID,
    paymentAmount: 900,
    paymentMethod: "Efectivo",
  });
  return (
    <ScrollView>
      <Text>Payment Screen</Text>
      <TextFields form={form.current} />
      <PaymentMethod requestOrder={requestOrder} form={form.current} />
      <HStack>
        <CartItems items={cart} />
      </HStack>
    </ScrollView>
  );
};
export default Payment;
