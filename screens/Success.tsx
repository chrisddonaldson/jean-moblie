import * as React from "react";
import { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Login from "react-native-login-keycloak";

const checkIfTokensAreOnDevice = async () => {
  Login.getTokens()
    .then((res: any) => console.log(res))
    .catch((error: any) => console.log(error));
};

export default function Success() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Success</Text>

      <Text>Success</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
