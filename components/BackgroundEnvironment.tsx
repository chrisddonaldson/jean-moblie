import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "../components/Themed";
import { SafeAreaView, StyleSheet } from "react-native";
export default function BackgroundEnvironment({ children, style }) {
  return (
    <LinearGradient
      style={{flex: 1, paddingTop: 32}}
      // Button Linear Gradient
      colors={["#70f1B0", "#26ADDF"]}
    >
      <SafeAreaView style={style}>
      {children}
      </SafeAreaView>
    </LinearGradient>
  );
}

