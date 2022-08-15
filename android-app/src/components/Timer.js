import { useEffect } from "react";
import { Text, View } from "react-native";
import useTimer from "../hooks/useTimer";

const Timer = ({ orderTaken, isOrderAccepted }) => {
  const [minutes, seconds, activateTimer] = useTimer();
  useEffect(() => {
    if (orderTaken && isOrderAccepted)
      activateTimer(Date.now() + 30 * 60 * 1000);
  }, [orderTaken, isOrderAccepted]);
  return (
    <View
      style={{
        margin: 10,
      }}
    >
      <Text style={{ fontSize: 20 }}>tiempo restante:</Text>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 25 }}>
          minutes: {minutes} seconds: {seconds}
        </Text>
      </View>
    </View>
  );
};
export default Timer;
