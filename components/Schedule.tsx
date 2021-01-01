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

interface scheduleInterface {
  schedule: Schedule;
  view: "ALL" | "TODAY";
}

export function happeningToday(routine: Routine | null) {
  let dt = new Date();
  switch (routine) {
    case "EVERYDAY":
      return "yes";
    case "ONCE_A_WEEK":
      return "maybe";
    case "ON_SATURDAY":
      return dt.getDay() == 6 ? "yes" : "no";
    case "ON_SUNDAY":
      return dt.getDay() == 0 ? "yes" : "no";
    case "ON_WEEKDAYS":
      return dt.getDay() == 6 || 0 ? "no" : "yes";
    case "ON_WEEKDAYS":
      return dt.getDay() == 6 || 0 ? "yes" : "no";
  }
}

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
      {schedule.events.map((e) => (
        <EventTicket e={e} view={view} />
      ))}
    </StatsBox>
  );
}

interface EventTicket {
  e: event;
  view: "ALL" | "TODAY";
}
export const EventTicket = ({ e, view }: EventTicket) => {
  console.log(e.description + " is happening today?");
  const isHappeningToday = happeningToday(e.routine) === "yes";
  let hidden = false;

  switch (view) {
    case "ALL":
      break;

    case "TODAY":
      if (!isHappeningToday) {
        hidden = true;
      }
  }

  return (
    <EventBox isToday={isHappeningToday} hidden={hidden}>
      <Stat>{e.description}</Stat>
      {"start_time" in e.period ? (
        <View>
          <Stat>Start time: {e.period.start_time}</Stat>
          <Stat>End time: {e.period.end_time}</Stat>
        </View>
      ) : (
        <Stat>Length: {FormatLength(e.period.length)}</Stat>
      )}
      <Stat>{e.routine}</Stat>
    </EventBox>
  );
};

export const EventTimeline = ({ e, view }: EventTicket) => {
  console.log(e.description + " is happening today?");
  const isHappeningToday = happeningToday(e.routine) === "yes";
  let hidden = false;

  switch (view) {
    case "ALL":
      break;

    case "TODAY":
      if (!isHappeningToday) {
        hidden = true;
      }
  }

  return (
    <TimelineBox isToday={isHappeningToday} hidden={hidden}>
      <Stat>{e.description}</Stat>
      {"start_time" in e.period ? (
        <Stat>
          {e.period.start_time} - {e.period.end_time}
        </Stat>
      ) : (
        <Stat>{FormatLength(e.period.length)}</Stat>
      )}
      {/* <Stat>{e.routine}</Stat> */}
    </TimelineBox>
  );
};

export function FormatLength(length: number) {
  const mins = Math.round(length * 60);
  if (mins < 60) {
    return `${mins}mins`;
  } else {
    const hours = Math.floor(mins / 60);
    const additionalMins = mins - hours * 60;
    if (additionalMins > 0) {
      return `${hours}hrs ${additionalMins}mins`;
    } else {
      return `${hours}hrs`;
    }
  }
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

interface EventBoxProps {
  isToday: boolean;
  hidden: boolean;
}

const EventBox = styled.View<EventBoxProps>`
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
