import * as React from "react";
import { Dispatch, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import { colours } from "../../colours";
import { updateWorkout } from "../../redux/workouts/workoutActions";
import { WorkoutRow } from "./WorkoutRowContainer";

interface WorkoutCardI {
    workout: any;
}

export function WorkoutCard({workout}: WorkoutCardI){
const [open, setOpen ] = useState(false);
const dispatch = useDispatch();
function onWorkoutRowChange(update:any, dispatch: Dispatch<any>){
   
    // console.log(workout._id + " has had an update")
    console.log(update)
    dispatch(updateWorkout(update))
}
    return(
        <WorkoutCardContainer>
            <HeadingContainer onPress={()=>{setOpen(!open)}}>
            <Heading>
                {workout.workoutName}
            </Heading>
            </HeadingContainer>
{open?(<Body>
    
    <WorkoutRowHeader>
        <Index>#</Index>
        <Name>Name</Name>
        <Reps>Reps</Reps>
        <Sets>Sets</Sets>
    </WorkoutRowHeader>
        {workout.workout.map((v,i)=> <WorkoutRow workout={v} key={"Workout-row-container"+i} index ={i} onWorkoutRowChange={(update)=>onWorkoutRowChange(update,dispatch)} />)}
        </Body>
        
        ):(null)}
        
    
            
        </WorkoutCardContainer>
    
    )}

const Body = styled.View`
   background-color: ${colours.darkTheme.dark};
   padding: 10px;
  
`

const WorkoutCardContainer = styled.View`
  margin-top: 10px;
  
  border-radius: 10px;
  border: 1px;
  border-color: white;
  border-radius: 10px;
  overflow: hidden;
`
const WorkoutRowHeader = styled.View`
    /* background-color: white; */
                display:flex;
                flex-direction: row;
          padding-bottom: 5px;


`

const HeadingContainer = styled.TouchableOpacity`
   background-color: ${colours.darkTheme.dark};
   padding: 10px;

`
const Heading = styled.Text`
   font-size: 1rem;
   font-family: "Righteous_400Regular";
   color: ${colours.green};
`


const Index = styled.Text`
   flex:1;
   /* text-align:right; */
   color: white;
`
const Name = styled.Text`
   flex:5;
   color: white;
`
const Reps = styled.Text`
       flex:1;
       color: white;
`
const Sets = styled.Text`
     flex:1;
     color: white;
`