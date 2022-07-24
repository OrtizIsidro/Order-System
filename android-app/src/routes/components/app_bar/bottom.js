import { AppBar, Chip, IconButton } from "@react-native-material/core";
import { Text, View } from "react-native";
import { getInitialPath } from "../../../lib/helper";
import { getLinksData } from "./helper";

const BottomAppBar = ({ amount }) => {
  const iconProps = {
    size: 24,
    color: "white",
  };
  const iconButtonStyles = {
    backgroundColor: "#4E4F50",
  };
  const iconButtonHomeStyles = {
    ...iconButtonStyles,
    position: "absolute",
    top: -28,
    alignSelf: "center",
  };
  const rootPath = getInitialPath();
  const [HomeData, CartData, DeliveryData] = getLinksData(rootPath, iconProps);
  return (
    <View>
      <AppBar
        style={{ paddingHorizontal: 50 }}
        color="black"
        variant="bottom"
        leading={
          <View>
            <Chip
              color="orange"
              style={{ position: "absolute", zIndex: 1, top: -15, right: -15 }}
              label={<Text>{amount}</Text>}
            />
            <IconButton {...CartData} style={iconButtonStyles} />
          </View>
        }
        trailing={<IconButton {...DeliveryData} style={iconButtonStyles} />}
        children={<IconButton {...HomeData} style={iconButtonHomeStyles} />}
      />
    </View>
  );
};
export default BottomAppBar;
