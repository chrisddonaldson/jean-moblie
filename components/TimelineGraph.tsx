import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { colours } from "../colours";
import { Schedule, event } from "../sample_data/sample_data_types";
import { EventByDepth } from "../Utility/EventsByDepth";
import { FormatLength } from "../Utility/FormatLength";
import { TimeToMins } from "../Utility/TimeUtil";

export function TimelineGraph({
  eventByDepth,
  yScale,
}: TimelineGraphInterface) {
  const width = 100 / eventByDepth.depth;
  return (
    <View
      style={{
        position: "absolute",
        width: "100%",
        flex: 1,
        flexDirection: "row",
        display: "flex",
      }}
    >
      {eventByDepth.events.map((e, i) => {
        return (
          <EventBox
            e={e}
            color={e.color}
            yScale={yScale}
            maxWidth={width}
            key={"eventbox" + i}
          />
        );
      })}
    </View>
  );
}

function EventBox({ e, color, yScale, maxWidth }: EventBoxInterface) {
  let top = 0;
  if ("start_time" in e.period) {
    top = TimeToMins(e.period.start_time) * yScale;
    // console.log(top);
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

interface EventBoxInterface {
  e: event;
  color: string;
  yScale: number;
  maxWidth: number;
}

interface TimelineGraphInterface {
  eventByDepth: EventByDepth;
  yScale: number;
}

interface SpacerInterface {
  top: number;
}

interface ContainerInterface {
  color: string;
}

interface HeadingInterface {
  color: string;
}

const Spacer = styled.View<SpacerInterface>`
  top: ${(props) => props.top}px;
  padding-left: 1px;
  padding-right: 1px;
  /* border: 1px solid blue; */
  display: flex;
  min-height: 64px;
  flex: 1;
`;

const Container = styled.View<ContainerInterface>`
  border-radius: 4px;
  border-width: 2px;
  border-color: ${(props) => props.color};
  flex: 1;
  padding: 2px;
  padding-left: 4px;
  background-color: ${colours.darkTheme.light};
`;

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
