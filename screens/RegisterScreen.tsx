import * as React from "react";
import { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import { Text } from "../components/Themed";
import {BackgroundEnvironment} from "../components/BackgroundEnvironment";

export default function RegisterScreen({ navigation }) {
  const [text, setText] = useState("");

  return (
    <BackgroundEnvironment navigation={navigation} breadcrumb={"Register"}>
      <Text style={styles.title}>New Account</Text>

      <Text>Username</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          minWidth: 200,
        }}
        onChangeText={(value) => setText(value)}
        value={text}
      />
      <Text>Password</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          minWidth: 200,
        }}
        onChangeText={(value) => setText(value)}
        value={text}
      />
      <Text>Repeat Password</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          minWidth: 200,
        }}
        onChangeText={(value) => setText(value)}
        value={text}
      />
      <Text>Email</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          minWidth: 200,
        }}
        onChangeText={(value) => setText(value)}
        value={text}
      />
      <Button
        onPress={() => {
      
        }}
        title="Register"
      />
      <Button onPress={() => navigation.navigate("Login")} title="Back" />
    </BackgroundEnvironment>
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
