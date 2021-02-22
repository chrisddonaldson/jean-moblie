import styled from "styled-components/native"
import * as React from "react";
import { FunctionComponent, useState } from "react";
import { CustomTextInput } from "../forms/CustomTextInput";
import { useEffect } from "react";

interface WorkoutRowInterface {
    workout: any;
    index: number
    onWorkoutRowChange: ((update: any )=> void)
}

export const WorkoutRow  = ({workout, index, onWorkoutRowChange}:WorkoutRowInterface) => {
const [name, setName ] = useState(workout.name)
const [reps, setReps ] = useState(workout.reps)
const [sets, setSets ] = useState(workout.sets)
// console.log(workout)
  const onSubmitEditing = () => {
        // console.log("changes")
        // what is different to the original, should I send an update?
        const update = {name,reps, sets, index}
        onWorkoutRowChange(update)
    }
return (
    <WorkoutRowContainer >    
        <Index>{(index+":")}</Index>
        <Name>
        <CustomTextInput
        lable={"Name"}
        initialValue={name}
        onChangeText={(text)=>{setName(text)}}
        onSubmit={(e)=>onSubmitEditing()}
        />
        </Name>
        <Reps>
           <CustomTextInput
        lable={"Reps"}
        initialValue={reps}
        onChangeText={(text)=>{setReps(text)}}
        onSubmit={(e)=>onSubmitEditing()}
        />
        </Reps>
        <Sets>
           <CustomTextInput
        lable={"Sets"}
        initialValue={sets}
        onChangeText={(text)=>{setSets(text)}}
        onSubmit={(e)=>onSubmitEditing()}
        />
        </Sets>
    
    </WorkoutRowContainer>)
    
}

const WorkoutRowContainer = styled.View`
    display:flex;
    flex-direction: row;
    padding-bottom: 5px;
`

const Index = styled.Text`
    flex:1;
    color: white;
`
const Name = styled.View`
    flex:5;
    color: white;
`
const Reps = styled.View`
    flex:1;
    color: white;
`
const Sets = styled.View`
    flex:1;
    color: white;
`