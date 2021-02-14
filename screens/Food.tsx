import axios from "axios";
import * as React from "react";
import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import FoodForm from "../components/food/FoodForm";
import { StyledTextInput } from "../components/StyledTextInput";
import { sampleDrill1 } from "../components/tabata/SampleDrills";
import { TabataDisplay } from "../components/tabata/tabataDisplay";
import { Text, View } from "../components/Themed";
import { HomePullupDay } from "../sample_data/Workouts/ChinUps";

function APITest(){
  console.log("")
  console.log("")
  console.log("NETWORK REQUEST")
  fetch('http://192.168.1.113:3000/api/workout', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify( {
      workoutName: 'Home Pullup Day',
      timestamp: Date.now(),
      workout: HomePullupDay
    }),
  }).catch(e=>{console.log(e)})

}

export default function Food() {
  const [value, onChangeText] = React.useState('Useless Placeholder');



  return (
    <View style={styles.container}>
      <Text>
        This is the food container
      </Text>
      <Button
      title={"Add Workout"} 
      onPress={()=>{APITest()}}
      />

 <FoodForm />
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
