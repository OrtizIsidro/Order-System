import { TextInput } from "@react-native-material/core";
import { Text } from "react-native";

const TextField = ({ onChangeText, label }) => {
  return (
    <>
      <Text>{label}</Text>
      <TextInput variant="filled" onChangeText={onChangeText} />
    </>
  );
};
export default TextField;
