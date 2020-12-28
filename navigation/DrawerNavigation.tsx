import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Success from "../screens/Success";
import Login from "../screens/login";
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/RegisterScreen";
import Dashboard from "../screens/Dashboard";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="Register" component={RegisterScreen} />
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      {/* <Drawer.Screen name="Home" component={Success} /> */}
    </Drawer.Navigator>
  );
}