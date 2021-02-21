import * as React from "react";
import { useState } from "react";
import styled from "styled-components/native";
import { colours } from "../../colours";

interface WorkoutCardI {
    workout: any;
}

export function WorkoutCard({workout}: WorkoutCardI){
const [open, setOpen ] = useState(false);

    return(
        <WorkoutCardContainer>
            <HeadingContainer onPress={()=>{setOpen(!open)}}>
            <Heading>
                {workout.workoutName}
            </Heading>
            </HeadingContainer>
{open?(<Body>
    <WorkoutRowContainer>
    <Index>#</Index>
                    <Name>Name</Name>
                    <Reps>Reps</Reps>
                    <Sets>Sets</Sets>

    </WorkoutRowContainer>
                {workout.workout.map((v,i)=>{
                return<WorkoutRowContainer>
                    <Index>{i+":"}</Index>
                    <Name>{v.name}</Name>
                    <Reps>{v.reps}</Reps>
                    <Sets>{v.sets}</Sets>
                </WorkoutRowContainer>
                })}
                </Body>):(null)}
            
        </WorkoutCardContainer>
    
    )}

const Body = styled.View`
   background-color: ${colours.darkTheme.dark};
   padding: 10px;
  
`

const WorkoutCardContainer = styled.View`
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  overflow: hidden;
`
const WorkoutRowContainer = styled.View`
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