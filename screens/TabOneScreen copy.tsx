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

const login = async () => {
  const config = {
    url: "https://api.jeanbeta.com/auth",
    realm: "jean-app",
    clientId: "jean-app-code-flow-client",
    redirectUri: "http://localhost:19006/success.html",
    appsiteUri: "https://<APPSITE HOST>/app.html",
    // kcIdpHint: "facebook", // *optional*
  };

  Login.startLoginProcess(config).then((tokens: any) => {
    console.log(tokens);
  });
};

export default function TabOneScreen() {
  const [text, setText] = useState("");
  const onPressLearnMore = () => {
    login();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jean</Text>

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
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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
