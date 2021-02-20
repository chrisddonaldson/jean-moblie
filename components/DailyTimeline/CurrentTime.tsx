import { View } from "react-native";

import React, { useEffect, useState } from "react";

import styled from "styled-components/native";
import { TimeToHours, TimeToMins } from "../../Utility/TimeUtil";
import {
  GetCurrentTime,
  GetCurrentTimeFromDate,
} from "../../Utility/GetCurrentTime";
import { colours } from "../../colours";
import { useSelector } from "react-redux";

interface CurrentTimeInterface {
  yScale: number;
}

export function CurrentTimeOffsetCalc(time:Date,yScale:number){
return TimeToHours(GetCurrentTimeFromDate(time)) * yScale;
}

export function CurrentTime({ yScale }: CurrentTimeInterface) {
  const top = 100;
  // const [time, setTime] = useState(new Date());
  let timer;
  
  const time = useSelector(state => state.chat.time)
  // console.log(time)
  const yOffset = CurrentTimeOffsetCalc(time,yScale)

  return (
    <Line
      style={{
        top: yOffset - 1,
        shadowColor: colours.green,
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 2,
      }}
    ></Line>
  );
}

const Line = styled.View`
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: white;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${colours.green};
  z-index: 1;
  display: flex;
`;
