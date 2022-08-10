import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import { Link } from "react-router-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: "70%", flex: 2 }}>
        <Text style={styles.text}>
          Hola!{"\n"}
          Esta es la nueva aplicacion de "Pizzas Dani" para realizar pedidos!
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <Link
          to="/home"
          style={{
            backgroundColor: "rgba(255, 66, 66, 1)",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            MIRA NUESTRO MENU ACA!
          </Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    paddingTop: StatusBar.currentHeight,
    alignItems: "center",
    backgroundColor: "rgb(20, 26, 26)",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: 70,
    color: "white",
  },
});

export default SplashScreen;
