import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import {BackgroundEnvironment} from "../components/BackgroundEnvironment";

import EditScreenInfo from "../components/EditScreenInfo";
import FoodForm from "../components/food/FoodForm";
import { StyledTextInput } from "../components/StyledTextInput";
import { sampleDrill1 } from "../components/tabata/SampleDrills";
import { TabataDisplay } from "../components/tabata/tabataDisplay";
import { WorkoutCard } from "../components/tabata/WorkoutCard";
import { Text, View } from "../components/Themed";
import { getWorkouts } from "../redux/workouts/workoutActions";
import { HomePullupDay } from "../sample_data/Workouts/ChinUps";
import { apiUrl } from "../Utility/Environment";

function AddWorkout(){
const data =   {
  workoutName: 'Home Pullup Day',
  timestamp: Date.now(),
  workout: HomePullupDay
}

console.log(JSON.stringify(data))
  fetch(apiUrl+'/api/workout', {
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

export default function Workouts({navigation}) {
  const [value, onChangeText] = useState('Useless Placeholder');
  // const [workouts, setWorkouts] = useState([])
const workouts = useSelector(state => state.workouts.workouts)
// const time = useSelector(state => state.chat.time)
const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getWorkouts)
 },[])

  return (
    <BackgroundEnvironment navigation={navigation} breadcrumb="Workouts">
    <Container>
      
      <Button
      title={"Add Workout"} 
      onPress={()=>{AddWorkout()}}
      />


 {/* <FoodForm /> */}

    {workouts? workouts.map((v)=>{
      return <WorkoutCard workout={v} key={v._id}/>

    }):(null)}

    </Container>
    </BackgroundEnvironment>
  );
}



const Container = styled.View`
flex:1
  
`
