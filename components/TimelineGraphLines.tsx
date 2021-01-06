import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { colours } from "../colours";
import { Schedule, event } from "../sample_data/sample_data_types";
import { FormatLength } from "../Utility/FormatLength";
import { TimeToMins } from "../Utility/TimeUtil";

interface TimelineGraphLinesInterface {
  schedule: Schedule;
  yScale: number;
}

export function TimelineGraphLines({
  schedule,
  yScale,
}: TimelineGraphLinesInterface) {
  console.log(schedule);

  return (
    // acts as the fixed pinboard
    <View
      style={{
        position: "absolute",

        width: "100%",
        height: "100%",
        paddingLeft: 8,
      }}
    >
      {schedule.events.map((e, i) => (
        // All fo these stack on top of each other
        <View
          style={{
            // borderColor: "red",
            // borderWidth: 1,
            position: "absolute",
            flex: 1,
            display: "flex",
          }}
        >
          <EventLine
            e={e}
            color={schedule.color}
            yScale={yScale}
            key={"EventLine" + i}
          />
        </View>
      ))}
    </View>
  );
}

interface EventLineInterface {
  e: event;
  color: string;
  yScale: number;
}
function EventLine({ e, color, yScale }: EventLineInterface) {
  let top = 0;
  let height = 0;
  if ("start_time" in e.period) {
    top = TimeToMins(e.period.start_time) * yScale;
    height = TimeToMins(e.period.end_time) * yScale - top;
    console.log(top);
  }
  return (
    <Spacer top={top}>
      <Dot color={color} distance={0} />
      <Container color={color} height={height}></Container>
      <Dot color={color} distance={0} />
    </Spacer>
  );
}

const Dot = styled.View<DotInterface>`
  border-color: ${(props) => props.color};
  background-color: #fff;
  border-width: 3px;
  width: 9px;
  height: 9px;
  border-radius: 4px;
  /* left: -3px; */
  bottom: ${(props) => props.distance};
`;

interface DotInterface {
  color: string;
  distance: number;
}

interface SpacerInterface {
  top: number;
}

interface ContainerInterface {
  color: string;
  height: number;
}

const Spacer = styled.View<SpacerInterface>`
  top: ${(props) => props.top}px;
  /* border-width: 1px; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View<ContainerInterface>`
  background-color: ${(props) => props.color};
  width: 3px;
  min-height: ${(props) => props.height};
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
