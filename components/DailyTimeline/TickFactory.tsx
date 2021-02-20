import React from "react";
import { View, Text } from "react-native";
import { StyledComponent } from "styled-components";
import styled from "styled-components/native";
import { colours } from "../../colours";

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

function HourTicks(yScale: number) {
  let ticks = [];
  for (let i = 0; i < 24; i++) {
    ticks.push(
      <TickContainer height={yScale} key={"hour-"+i}>
        <TickContainerRow>
          <TickText size={12} color={"white"}>
            {i}
          </TickText>
          <Tick height={3} width={"50%"} color={"white"} />
        </TickContainerRow>
      </TickContainer>
    );
  }
  return ticks;
}

function HalfHourTicks(yScale: number) {
  let ticks = [];
  for (let i = 0; i < 48; i++) {
    ticks.push(
      <TickContainer height={yScale / 2} key={"half-hour-"+i}>
        <TickContainerRow>
          {i % 2 !== 0 ? (
            <>
              <TickText size={8} color={"white"}>
                30
              </TickText>
              <Tick height={2} width={"40%"} color={"white"} />
            </>
          ) : null}
        </TickContainerRow>
      </TickContainer>
    );
  }
  return ticks;
}

function QuaterHourTicks(yScale: number) {
  let ticks = [];
  let  isPrinting = false;
  let is15Mins = false;
  for (let i = 0; i < 96; i++) {
    isPrinting = false;
    if(i % 4 !== 0 && i % 2 !== 0){
      isPrinting = true;
      is15Mins = !is15Mins;
    }
    ticks.push(
      <TickContainer height={yScale / 4} key={"quater-"+i}>
        <TickContainerRow>
          {isPrinting? (
            <>
              <TickText size={7} color={"white"}>
                {is15Mins? ('15'):('45')}
              
              </TickText>
              <Tick height={2} width={"30%"} color={"white"} />
            </>
          ) : null}
        </TickContainerRow>
      </TickContainer>
    );
  }
  return ticks;
}

function FiveMinTicks(yScale: number) {
  let ticks = [];
  for (let i = 0; i < 288; i++) {
    ticks.push(
      <TickContainer height={yScale / 12} key={"five-min-"+i}>
        <TickContainerRow>
          {i % 12 !== 0 && i && i % 3 !== 0 ? (
            <>
              <Tick height={2} width={"30%"} color={"white"} />
            </>
          ) : null}
        </TickContainerRow>
      </TickContainer>
    );
  }
  return ticks;
}

function MinTicks(yScale: number) {
  let ticks = [];
  for (let i = 0; i < 1440; i++) {
    ticks.push(
      <TickContainer height={yScale / 60} key={"min-"+i}>
        <TickContainerRow>
          {i % 60 !== 0 && i % 30 !== 0 && i && i % 5 !== 0 ? (
            <>
              <Tick height={1} width={"20%"} color={"white"} />
            </>
          ) : null}
        </TickContainerRow>
      </TickContainer>
    );
  }
  return ticks;
}

export const TickFactory = React.memo(TickFactoryD);
function TickFactoryD({ yScale }: TickFactoryInterface) {
  const showSeconds = false;

  const hourTicks = true;
  const halfHourTicks = true;
  const quaterHourTicks = true;
  let fiveMinuteTicks = true;
  let minuteTicks = true;

  if(yScale <300 ){
     fiveMinuteTicks = false;
     minuteTicks = false;
  }
  return (
    <TickCol style={[colours.shadowStyle, { zIndex: 1 }, { elevation: 11 }]}>
      <TickColContainer>
        {hourTicks ? HourTicks(yScale) : null}
      </TickColContainer>
      <TickColContainer>
        {halfHourTicks ? HalfHourTicks(yScale) : null}
      </TickColContainer>
      <TickColContainer>
        {quaterHourTicks ? QuaterHourTicks(yScale) : null}
      </TickColContainer>
      <TickColContainer>
        {fiveMinuteTicks ? FiveMinTicks(yScale) : null}
      </TickColContainer>
      <TickColContainer>
        {minuteTicks ? MinTicks(yScale) : null}
      </TickColContainer>
      {/* {ticks.map((v) => v)} */}
    </TickCol>
  );
}

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

const TickColContainer = styled.View`
  position: absolute;
  width: 100%;
`;

interface TickContainerInterface {
  height: number;
}

const TickContainer = styled.View<TickContainerInterface>`
  min-height: ${(props) => props.height}px;
  width: 100%;
`;

const TickContainerRow = styled.View`

  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`;

interface TickInterface {
  height: number;
  width: string;
  color: string;
}

const Tick = styled.View<TickInterface>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width};
  top: ${(props) => -props.height / 2}px;
  background-color: ${(props) => props.color};
`;

interface TickTextInterface {
  color: string;
  size: number;
}

const TickText = styled.Text<TickTextInterface>`
  color: ${(props) => props.color};
  top: ${(props) => (-props.size / 2) -2}px;
  font-size: ${(props) => props.size}px;
  position: relative;
  padding-right: 2px;
`;
