import React, { useState } from "react"
import { Button } from "react-native"
import { useSelector } from "react-redux"
import styled from "styled-components/native"
import { colours } from "../../colours"
import { WorkoutCard } from "./WorkoutCard"

export const WorkoutInspector = () => {
    const workouts = useSelector(state => state.workouts.workouts)

    const [selectedWorkout, SetSelectedWorkout] = useState()
    return(
    <Container>
        <Header>
<BreadCrumb>
        Workout Inspector
</BreadCrumb>

        </Header>
        <Body>
    <Button
    title={"Add Workout"} 
    onPress={()=>{workouts()}}
    />
    {workouts? workouts.map((v)=>{
        return <WorkoutCard workout={v} key={v._id}/>
    
      }):(null)}
</Body>
</Container>

)

}


const Container = styled.View`
margin: 10px;
border-radius: 10px;
background-color: ${colours.darkTheme.dark};

`
const Header = styled.View`
padding: 10px;
margin: 10px;

`
const Body = styled.View`
padding: 10px;
margin: 10px;

`
const BreadCrumb = styled.Text`
  font-family: "Righteous_400Regular";
  color: white;
  line-height: 1.6rem;
  font-size: 1.6rem;

`