import * as React from "react";
import { useState } from "react";
import { Button, StyleSheet, TextInput } from "react-native";
import {BackgroundEnvironment} from "../components/BackgroundEnvironment";

import EditScreenInfo from "../components/EditScreenInfo";
import { sampleDrill1 } from "../components/tabata/SampleDrills";
import { TabataDisplay } from "../components/tabata/tabataDisplay";
import { Text, View } from "../components/Themed";

export default function TabataScreen({ navigation }) {
  return (
    <BackgroundEnvironment navigation={navigation} breadcrumb={"tabata"}>
      <Button onPress={() => navigation.openDrawer()} title="Nav" />
      <TabataDisplay drill={sampleDrill1} />
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
