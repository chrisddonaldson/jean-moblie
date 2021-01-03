import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import logo from "../assets/JeanLogoImproved-05.png";
import { colours } from "../colours";
import {
  Schedule,
  Period,
  event,
  Routine,
} from "../sample_data/sample_data_types";
import { FormatLength } from "../Utility/FormatLength";
import { EventTicket } from "./Events/EventTicket";

interface scheduleInterface {
  schedule: Schedule;
  view: "ALL" | "TODAY";
}

// SCHEDULE DISPLAY =======================================================================

export default function ScheduleDisplay({ schedule, view }: scheduleInterface) {
  return (
    <StatsBox
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
      }}
    >
      <Stat>{schedule.name}</Stat>
      <Stat>Number of Events: {schedule.events.length}</Stat>
      {schedule.events.map((e, i) => (
        <EventTicket e={e} view={view} key={"EventTicket" + i} />
      ))}
    </StatsBox>
  );
}

interface TimelineBoxProps {
  isToday: boolean;
  hidden: boolean;
}

const TimelineBox = styled.View<EventBoxProps>`
  /* border: 1px solid black; */
  padding: 8px;
  border-radius: 4px;
  margin-top: 4px;

  background-color: ${colours.blue};
  display: ${(props) => (props.hidden ? "none" : "flex")};
`;

const StatsBox = styled.View`
  /* border: 1px solid black; */
  background-color: ${colours.darkblue};
  padding: 8px;
  width: auto;

  border-radius: 8px;
`;

const Stat = styled.Text`
  color: white;
  text-transform: capitalize;
`;
