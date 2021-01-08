import { View } from "react-native";

import React from "react";

import styled from "styled-components/native";
import { TimeToMins } from "../Utility/TimeUtil";
import { GetCurrentTime } from "../Utility/GetCurrentTime";

interface CurrentTimeInterface {
  yScale: number;
}

export function CurrentTime({ yScale }: CurrentTimeInterface) {
  // get the hours
  // get the time
  // time to position
  const top = 100;

  const yOffset = TimeToMins(GetCurrentTime()) * yScale;

  return <Line style={{ top: yOffset }}></Line>;
}

const Line = styled.View`
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: green;
  display: flex;
`;
