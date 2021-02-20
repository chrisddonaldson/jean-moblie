import React, { useEffect, useReducer, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import logo from "../assets/JeanLogoImproved-05.png";
import { colours } from "../../colours";

import { event, Schedule } from "../../sample_data/sample_data_types";
import { HomePullupDay, makeWorkout } from "../../sample_data/Workouts/ChinUps";
import {
  GetCurrentTime,
  GetCurrentTimeFromDate,
  GetDisplayTimeFormat,
} from "../../Utility/GetCurrentTime";
import { TimeToMins } from "../../Utility/TimeUtil";
import { TimelineGraph } from "./TimelineGraph";
import { TimelineGraphContainer } from "./TimelineGraphContainer";
import { connect, useDispatch, useSelector } from "react-redux";
import { onLoad, sendMessage, timerStart } from "../../redux/chat/chatActions";
import { chatReducer } from "../../redux/chat/chatReducer";
import { TimelineHeader } from "./TimelineHeader";

interface TimelineInterface {
  schedules: Schedule[];
}

 export function Timeline({ schedules }: TimelineInterface) {
  // makeWorkout(HomePullupDay);
  const [scale, setScale] = useState(2000);
  let stack: event[] = [];
  schedules.forEach((v) => {
    v.events.forEach((e) => {
      stack.push(e);
    });
  });


  const dispatch = useDispatch()

useEffect(()=>{

  dispatch(timerStart())
},[])

  return (
    <Pannel style={[colours.shadowStyle, { zIndex: 1 }]}>
     <TimelineHeader/>
      <Body>
        <TimelineGraphContainer schedules={schedules} yScale={scale} />
      </Body>
      <Footer
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
          zIndex: 1,
        }}
      >
        <ButtonStyled onPress={() => setScale(100)} ><ButtonText>Scale 1</ButtonText></ButtonStyled>
        <ButtonStyled onPress={() => setScale(300)} ><ButtonText>Scale 2</ButtonText></ButtonStyled>
        <ButtonStyled onPress={() => setScale(800)} ><ButtonText>Scale 3</ButtonText></ButtonStyled>
        <ButtonStyled onPress={() => setScale(1200)} ><ButtonText>Scale 4</ButtonText></ButtonStyled>
        <ButtonStyled onPress={() => setScale(2000)} ><ButtonText>Scale 5</ButtonText></ButtonStyled>
      </Footer>
    </Pannel>
  );
}

// const mapStateToProps = (state, ownProps) => ({
//   todo: state.ch
// // })
// export default connect(mapStateToProps)(Timeline)
const ButtonStyled = styled.TouchableOpacity`
  background-color: ${colours.darkTheme.light};
  border-color: ${colours.yellow};
  border-width: 1px;
  border-radius: 4px;
 margin-left: 4px;
 margin-top: 4px;
 margin-bottom: 4px;
 
  font-family: "Segoe UI";
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ButtonText = styled.Text`
 color: ${colours.yellow};;
`
const Body = styled.View`
  background-color: ${colours.darkTheme.dark};
  display: flex;
  flex-direction: row;
  min-width: 320px;
  color: white;
  font-family: "Segoe UI";
  flex: 1;
`;
const Footer = styled.View`
  background-color: ${colours.darkTheme.dark};
  display: flex;
  flex-direction: row;
  min-width: 320px;
  color: white;
  font-family: "Segoe UI";
  min-height: 60px;
  border-top-color: ${colours.green};
  border-top-width: 1px;
`;

const Pannel = styled.View`
  background-color: ${colours.darkblue};
  border-radius: 8px;
  overflow: hidden;
  flex: 1;
  display: flex;
  height: 100%;
`;
const Line = styled.View`
  background-color: ${colours.darkblue};
`;

function mapSchedules(s: Schedule) {
  return s.events.map((v) => v);
}
