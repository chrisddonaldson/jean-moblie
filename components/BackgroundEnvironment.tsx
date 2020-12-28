import React from "react";

import { colours } from "../constants/brandColors";

import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "../components/Themed";
import { StyleSheet } from "react-native";
export default function BackgroundEnvironment({ children, style }) {
  return (
    <LinearGradient
      style={style}
      // Button Linear Gradient
      colors={["#70f1B0", "#26ADDF"]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
