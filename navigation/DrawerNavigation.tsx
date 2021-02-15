import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/RegisterScreen";
import Dashboard from "../screens/Dashboard";
import TabataScreen from "../screens/Tabata";
import Food from "../screens/Food";
import Workouts from "../screens/Workouts";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Tabata" component={TabataScreen} />
      <Drawer.Screen name="Food" component={Food} />
      <Drawer.Screen name="Workouts" component={Workouts} />
    </Drawer.Navigator>
  );
}
