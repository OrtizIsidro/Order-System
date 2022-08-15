import { useState } from "react";
import { View } from "react-native";
import { useNavigate } from "react-router-native";
import { CustomCheckBox, Efectivo, MercadoPago } from "./helper";
import { navigation } from "../../data/navigation";
const { delivery, home } = navigation;

const PaymentMethod = ({ requestOrder, form }) => {
  const [paymentMethod, setPaymentMethod] = useState("Efectivo");
  const navigate = useNavigate();
  const handleOrder = (orderCart) => {
    requestOrder(orderCart);
    navigate(delivery);
  };
  const sendOrder = () => handleOrder(form);
  const handlePaymentMethod = (method) => {
    form.paymentMethod = method;
    return setPaymentMethod(method);
  };
  const handlePaymentAmount = (amount) => (form.paymentAmount = amount);
  const handleCancel = () => navigate(home);
  return (
    <View style={{ minHeight: 150, padding: 10, marginTop: 10 }}>
      <CustomCheckBox
        currentActive={paymentMethod}
        handler={handlePaymentMethod}
        options={["Efectivo", "Mercado Pago"]}
      />
      {paymentMethod === "Efectivo" ? (
        <Efectivo
          handleConfirm={sendOrder}
          handleCancel={handleCancel}
          setAmount={handlePaymentAmount}
        />
      ) : (
        <MercadoPago />
      )}
    </View>
  );
};
export default PaymentMethod;
