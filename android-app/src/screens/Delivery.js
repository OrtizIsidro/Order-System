import { Button, Text } from "@react-native-material/core";
import { View } from "react-native";
import Timer from "../components/Timer";

const Delivery = ({
  isOrderAccepted,
  orderRequested,
  orderTaken = false,
  children,
}) => {
  return (
    <View style={{ margin: 10 }}>
      {!orderRequested && !orderTaken && (
        <Text style={{ fontSize: 25 }}>
          En esta seccion podes ver el estado del pedido y el tiempo de entrega
          estimado.
        </Text>
      )}

      {orderRequested && (
        <View>
          <Text>
            Estamos tomando tu pedido, porfavor, danos un minuto, muchas
            gracias!
          </Text>
          <Button
            variant="text"
            loading={!isOrderAccepted}
            loadingIndicatorPosition="trailing"
          />
        </View>
      )}

      {orderTaken &&
        (isOrderAccepted ? (
          <View>
            <Text>
              En cuanto tu pedido salga de nuestra sucursal,recibiras una
              notificacion y podras ver como va tu pedido en tiempo real
            </Text>
            {children}
          </View>
        ) : (
          <View>
            <Text>
              lo sentimos, pero al parecer no pudimos tomar tu pedido, podes
              volver a intentarlo mas tarde
            </Text>
          </View>
        ))}
    </View>
  );
};
export default Delivery;
