import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { colours } from "../colours";
import { Schedule, event } from "../sample_data/sample_data_types";
import { FormatLength } from "../Utility/FormatLength";
import { TimeToMins } from "../Utility/TimeUtil";

interface TimelineGraphInterface {
  schedule: Schedule;
  yScale: number;
}

export function TimelineGraph({ schedule, yScale }: TimelineGraphInterface) {
  console.log(schedule);

  return (
    // acts as the fixed pinboard
    <View
      style={{
        position: "absolute",

        width: "100%",
        height: "100%",
      }}
    >
      {schedule.events.map((e, i) => {
        return (
          <View
            style={{
              position: "absolute",
              width: "100%",
              flex: 1,
              display: "flex",
            }}
            key={"EventBox" + i}
          >
            <EventBox e={e} color={schedule.color} yScale={yScale} />
          </View>
        );
      })}
    </View>
  );
}

interface EventBoxInterface {
  e: event;
  color: string;
  yScale: number;
}
function EventBox({ e, color, yScale }: EventBoxInterface) {
  let top = 0;
  if ("start_time" in e.period) {
    top = TimeToMins(e.period.start_time) * yScale;
    console.log(top);
  }
  return (
    <Spacer top={top}>
      <Container color={color} style={colours.shadowStyle}>
        <Heading color={color}>{e.description}</Heading>
        {"start_time" in e.period ? (
          <Label color={color}>
            {e.period.start_time} - {e.period.end_time}
          </Label>
        ) : (
          <Label color={color}>{FormatLength(e.period.length)}</Label>
        )}
      </Container>
    </Spacer>
  );
}

interface SpacerInterface {
  top: number;
}

interface ContainerInterface {
  color: string;
}

const Spacer = styled.View<SpacerInterface>`
  /* width: 100%; */
  top: ${(props) => props.top}px;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  min-height: 64px;
  flex: 1;
`;

const Container = styled.View<ContainerInterface>`
  border-radius: 4px;
  border-width: 2px;
  border-color: ${(props) => props.color};
  flex: 1;

  padding: 8px;
  background-color: ${colours.darkTheme.light};
`;

interface HeadingInterface {
  color: string;
}
const Heading = styled.Text<HeadingInterface>`
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

const Label = styled.Text<HeadingInterface>`
  /* font-weight: bold; */
  color: ${(props) => props.color};
  font-size: 10px;
`;
