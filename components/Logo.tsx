import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../assets/JeanLogoImproved-05.png";

export default function Logo() {
  return (
    <View
      style={{
        width: "100%",
        height: 78,
        // border: "1px solid green"
      }}
    >
      <Image
        source={logo}
        style={{
          width: undefined,
          height: undefined,
          flex: 1,
          // border: "1px solid red",
        }}
        resizeMode="contain"
      />
    </View>
  );
}
