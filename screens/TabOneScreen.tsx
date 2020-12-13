import * as React from "react";
import { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  const [text, setText] = useState("");
  const onPressLearnMore = () => {
    console.log("Learn more!");
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
