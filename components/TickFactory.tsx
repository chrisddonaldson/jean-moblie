import React from "react";
import { View, Text } from "react-native";
import { StyledComponent } from "styled-components";
import styled from "styled-components/native";
import { colours } from "../colours";

interface TickFactoryInterface {
  yScale: number;
}

function addHour(Ticks: JSX.Element[], yScale: number, hourLabel: String) {
  for (let i = 0; i < 60; i++) {
    if (i === 0 || i % 5 === 0) {
      if (i === 0) {
        Ticks.push(
          <Spacer height={yScale * 5} key={hourLabel + "_SupremeTick_" + i}>
            <SumpremeTick>
              <HourLabel>{hourLabel}</HourLabel>
            </SumpremeTick>
          </Spacer>
        );
      } else if (i % 15 === 0) {
        Ticks.push(
          <Spacer height={yScale * 5} key={hourLabel + "_MajorTick_" + i}>
            <MajorTick />
          </Spacer>
        );
      } else {
        Ticks.push(
          <Spacer height={yScale * 5} key={hourLabel + "_MinorTick_" + i}>
            <MinorTick />
          </Spacer>
        );
      }
    }
  }
  return Ticks;
}

export const TickFactory = ({ yScale }: TickFactoryInterface) => {
  const showSeconds = false;
  // for 1 hour
  // how many ticks
  // smallest tick is 1 second
  //1 min is made of 60 seconds
  let ticks: JSX.Element[] = [];
  for (let i = 0; i < 24; i++) {
    ticks = addHour(ticks, yScale, `${i}`);
  }

  return (
    <TickCol style={[colours.shadowStyle, { zIndex: 1 }, { elevation: 11 }]}>
      {ticks.map((v) => v)}
    </TickCol>
  );
};

interface BigTickInterface {
  height: number;
}
const TickCol = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-end;
  background-color: ${colours.darkTheme.darkmiddle};
  min-width: 20px;
  max-width: 30px;
  /* height: 230px; */
  /* overflow: hidden; */
`;

const HourLabel = styled.Text`
  color: ${colours.green};
  position: relative;
  left: -12px;
  bottom: 6px;
  font-size: 10px;
  min-width: 20px;
`;

const Spacer = styled.View<BigTickInterface>`
  min-height: ${(props) => props.height}px;
  max-height: ${(props) => props.height}px;
  max-height: ${(props) => props.height}px;
  justify-content: center;
  align-items: center;
`;
const MinorTick = styled.View`
  height: 0.5px;
  background-color: #c7c7c7;
  width: 5px;
`;
const MajorTick = styled.View`
  height: 1px;
  background-color: white;
  width: 7px;
`;
const SumpremeTick = styled.View`
  height: 3px;
  background-color: ${colours.green};
  width: 7px;
  display: flex;
`;
