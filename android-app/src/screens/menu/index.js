import { View } from "react-native";
import { Button, HStack } from "@react-native-material/core";
import { Routes, useNavigate } from "react-router-native";

const Menu = ({ childRoutes, navigation }) => {
  const { home, specials } = navigation;
  const navigate = useNavigate();
  return (
    <View>
      <HStack>
        <Button
          onPress={() => navigate(home)}
          color="#4E4F50"
          tintColor="white"
          title="Clasics"
          style={{ flex: 1, margin: 3, marginLeft: 0 }}
        />
        <Button
          onPress={() => navigate(specials)}
          color="darkorange"
          tintColor="black"
          title="Specials"
          style={{ flex: 1, margin: 3, marginRight: 0 }}
        />
      </HStack>
      <Routes children={childRoutes} />
    </View>
  );
};
export default Menu;
