import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { colours } from "../../colours";
import { Schedule, event } from "../../sample_data/sample_data_types";
import { EventByDepth } from "../../Utility/EventsByDepth";
import { FormatLength } from "../../Utility/FormatLength";
import { TimeToHours, TimeToMins } from "../../Utility/TimeUtil";

interface TimelineGraphLinesInterface {
  eventByDepth: EventByDepth;
  yScale: number;
}

export function TimelineGraphLines({
  eventByDepth,
  yScale,
}: TimelineGraphLinesInterface) {

  // console.log(eventByDepth)
  return (
    // acts as the fixed pinboard
    <View
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        // height: "100%",
        paddingLeft: 8,
      }}
    >
      {eventByDepth.events.map((e, i) => (
        <View
          key={"TimeLineGraph" + i}
          style={{
            flex: 1,
            display: "flex",
            // border: "1px solid black",
          }}
        >
          <EventLine
            e={e}
            color={e.color}
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
    top = TimeToHours(e.period.start_time) * yScale;
    height = TimeToHours(e.period.end_time) * yScale - top;

  }
  return (
    <Spacer top={top}>
      <Line color={color} bottom={height} top={0} />
      <Dot color={color} bottom={height} top={0} />
      <Container color={color} height={height}></Container>
      <Dot color={color} bottom={0} top={height} />
      <Line color={color} bottom={0} top={height} />
      <Fill color={color} />
    </Spacer>
  );
}

const Line = styled.View<DotInterface>`
  background-color: ${(props) => props.color};
  /* background-color: #fff; */
  width: 100%;
  height: 1px;
  border-radius: 4px;
  position: absolute;
  /* left: -3px; */
  bottom: ${(props) => props.bottom}px;
  top: ${(props) => props.top}px;
`;

const Dot = styled.View<DotInterface>`
  border-color: ${(props) => props.color};
  background-color: #fff;
  border-width: 3px;
  width: 9px;
  height: 9px;
  border-radius: 4px;
  position: absolute;
  /* left: -3px; */
  bottom: ${(props) => props.bottom - 4}px;
  top: ${(props) => props.top - 4}px;
`;

const Fill = styled.View<FillInterface>`
  background-color: ${(props) => props.color};
  opacity: 0.1;
  position: absolute;
  margin: 3px;
  /* border-radius: 8px; */
  height: 100%;
  width: 100%;
`;

interface FillInterface {
  color: string;
}

interface DotInterface {
  color: string;
  top: number;
  bottom: number;
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
  min-height: ${(props) => props.height}px;
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
