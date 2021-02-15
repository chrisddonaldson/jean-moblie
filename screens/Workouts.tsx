import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import FoodForm from "../components/food/FoodForm";
import { StyledTextInput } from "../components/StyledTextInput";
import { sampleDrill1 } from "../components/tabata/SampleDrills";
import { TabataDisplay } from "../components/tabata/tabataDisplay";
import { WorkoutCard } from "../components/tabata/WorkoutCard";
import { Text, View } from "../components/Themed";
import { HomePullupDay } from "../sample_data/Workouts/ChinUps";

function AddWorkout(){
const data =   {
  workoutName: 'Home Pullup Day',
  timestamp: Date.now(),
  workout: HomePullupDay
}

console.log(JSON.stringify(data))
  fetch('http://192.168.1.113:3000/api/workout', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(resp=>{
    console.log(resp)
  }).catch(e=>{console.log(e)})

}

export default function Workouts() {
  const [value, onChangeText] = useState('Useless Placeholder');

  const [workouts, setWorkouts] = useState([])

  useEffect(()=>{
    fetch('http://192.168.1.113:3000/api/workouts', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }).then(resp=>resp.json()).then(json =>
    setWorkouts(json)
    )
    
  .catch(e=>{console.log(e)})
 },[])
// console.log(workouts)

  return (
    <View style={styles.container}>
      <Text>
        This is the Workouts container
      </Text>
      <Button
      title={"Add Workout"} 
      onPress={()=>{AddWorkout()}}
      />


 {/* <FoodForm /> */}
 <View>
   
     <View>
    { workouts.map((v)=>{
      return <WorkoutCard workout={v} key={v._id}/>

    })}
</View>
   
 </View>
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
