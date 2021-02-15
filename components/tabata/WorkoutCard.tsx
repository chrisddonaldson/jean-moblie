import * as React from "react";
import styled from "styled-components/native";

interface WorkoutCardI {
    workout: any;
}

export function WorkoutCard({workout}: WorkoutCardI){
    return(
        <WorkoutCardContainer>
            <Heading>
                {workout.workoutName}
            </Heading>
                {workout.workout.map(v=>{
return<WorkoutRowContainer>
    <Name>{v.name}</Name>
    <Reps>{v.reps}</Reps>
    <Sets>{v.sets}</Sets>
</WorkoutRowContainer>
                })}
        </WorkoutCardContainer>
    )
}

const WorkoutCardContainer = styled.View`
    background-color: white;
    padding: 10px;
    margin: 10px;
`
const WorkoutRowContainer = styled.View`
    /* background-color: white; */
    padding: 10px;
    margin: 10px;
`


const Heading = styled.Text`
    color: red;
`


const Name = styled.Text`
    color: red;
`
const Reps = styled.Text`
    color: red;
`
const Sets = styled.Text`
    color: red;
`