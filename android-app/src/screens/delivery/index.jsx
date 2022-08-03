import { Button } from "@react-native-material/core";
import { View, Text } from "react-native";

const Delivery = ({
  isOrderAccepted,
  orderRequested,
  orderTaken = false,
  minutes,
  seconds,
}) => {
  return (
    <View>
      <Text>Delivery Route</Text>
      {orderRequested && (
        <View>
          <Text>
            estamos tomando tu pedido, porfavor, danos un minuto, muchas
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
              en cuanto tu pedido salga de nuestra sucursal,recibiras una
              notificacion y podras ver como va tu pedido en tiempo real
            </Text>
            <Text>
              tiempo restante: minutos: {minutes} || segundos: {seconds}
            </Text>
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
