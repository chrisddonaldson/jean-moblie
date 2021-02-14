import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import logo from "../assets/JeanLogoImproved-05.png";
import { colours } from "../colours";

import { event, Schedule } from "../sample_data/sample_data_types";
import { HomePullupDay, makeWorkout } from "../sample_data/Workouts/ChinUps";
import {
  GetCurrentTime,
  GetCurrentTimeFromDate,
  GetDisplayTimeFormat,
} from "../Utility/GetCurrentTime";
import { TimeToMins } from "../Utility/TimeUtil";
import { TimelineGraph } from "./TimelineGraph";
import { TimelineGraphContainer } from "./TimelineGraphContainer";

interface TimelineInterface {
  schedules: Schedule[];
}

export function Timeline({ schedules }: TimelineInterface) {
  makeWorkout(HomePullupDay);

  let stack: event[] = [];
  schedules.forEach((v) => {
    v.events.forEach((e) => {
      stack.push(e);
    });
  });

  const [time, setTime] = useState(new Date());
  const [scale, setScale] = useState(2000);

  useEffect(() => {
    // set up timer
    let timer = setTimeout(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <Pannel style={[colours.shadowStyle, { zIndex: 1 }]}>
      <Header style={[colours.shadowStyle, { zIndex: 1 }]}>
        <HeaderLeft style={[colours.shadowStyle, { zIndex: 1 }]}>
          <Text> Civil Twlight</Text>
        </HeaderLeft>
        <HeaderMiddle>
          <TimeLabel> {GetDisplayTimeFormat(time)}</TimeLabel>
        </HeaderMiddle>
        <HeaderRight>
          {/* <NoteLabel>{time.getDay()}</NoteLabel> */}
          {/* @TODO link this up */}
          <NoteLabel>{time.toDateString()}</NoteLabel>
          <NoteLabel>Earlsfield</NoteLabel>
          <NoteLabel>17degs</NoteLabel>
        </HeaderRight>
      </Header>
      <Body>
        {/* <TimelineGraphContainer schedules={schedules} yScale={scale} /> */}
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
        <Button onPress={() => setScale(100)} title="Scale 1" />
        <Button onPress={() => setScale(300)} title="Scale 2" />
        <Button onPress={() => setScale(800)} title="Scale 3" />
        <Button onPress={() => setScale(1200)} title="Scale 4" />
        <Button onPress={() => setScale(2000)} title="Scale 5" />
      </Footer>
    </Pannel>
  );
}

const TimeLabel = styled.Text`
  font-family: "Righteous";
  color: white;
  line-height: 40px;
  font-size: 32px;
`;

const NoteLabel = styled.Text`
  color: white;
  line-height: 14px;
  font-size: 12px;
`;

const Header = styled.View`
  background-color: ${colours.darkTheme.middle};
  display: flex;
  flex-direction: row;
  min-width: 280px;
  color: white;
  font-family: "Segoe UI";
  border-bottom-color: ${colours.green};
  overflow: hidden;
  border-bottom-width: 1px;
`;
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
const HeaderLeft = styled.View`
  background-color: ${colours.darkTheme.light};
  flex: 1;
  padding: 4px;
`;
const HeaderMiddle = styled.View`
  flex: 3;
  padding: 4px;
`;
const HeaderRight = styled.View`
  flex: 1;
  padding: 4px;
  font-size: 12px;
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
