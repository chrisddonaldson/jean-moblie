import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";
import {BackgroundEnvironment} from "../components/BackgroundEnvironment";


import { WorkoutCard } from "../components/workout/WorkoutCard";
import { Text, View } from "../components/Themed";
import { getWorkouts } from "../redux/workouts/workoutActions";
import { HomePullupDay } from "../sample_data/Workouts/ChinUps";
import { apiUrl } from "../Utility/Environment";
import { WorkoutInspector } from "../components/workout/WorkoutInspector";

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

// const time = useSelector(state => state.chat.time)
const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getWorkouts)
 },[])

  return (
    <BackgroundEnvironment navigation={navigation} breadcrumb="Workouts">
    <Container>
      
<WorkoutInspector/>

    </Container>
    </BackgroundEnvironment>
  );
}



const Container = styled.View`
flex:1
  
`
