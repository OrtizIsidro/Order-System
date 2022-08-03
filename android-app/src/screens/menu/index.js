import { View } from "react-native";
import { Button, HStack } from "@react-native-material/core";
import { Route, Routes, useNavigate } from "react-router-native";
import FlavorsMenu from "../../components/flavors_menu";

const Menu = ({ navigation, paths, addToCart }) => {
  const { home, specials } = navigation;
  const { specials: specialsPath } = paths;

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
      <Routes>
        <Route
          index
          element={
            <FlavorsMenu data={menu_data.clasics} addToCart={addToCart} />
          }
        />
        <Route
          path={specialsPath}
          element={
            <FlavorsMenu data={menu_data.specials} addToCart={addToCart} />
          }
        />
      </Routes>
    </View>
  );
};
export default Menu;
