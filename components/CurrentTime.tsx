import { View } from "react-native";

import React from "react";

import styled from "styled-components/native";
import { TimeToMins } from "../Utility/TimeUtil";
import { GetCurrentTime } from "../Utility/GetCurrentTime";
import { colours } from "../colours";

interface CurrentTimeInterface {
  yScale: number;
}

export function CurrentTime({ yScale }: CurrentTimeInterface) {
  // get the hours
  // get the time
  // time to position
  const top = 100;

  const yOffset = TimeToMins(GetCurrentTime()) * yScale;

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
