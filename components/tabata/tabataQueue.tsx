import React from "react";
import { View } from "react-native";

import styled from "styled-components/native";
import { colours } from "../../colours";
import { Drill } from "./SampleDrills";

interface TabataQueueInterface {
  drill: Drill;
}

const TabataQueue = ({ drill }: TabataQueueInterface) => {
  return (
    <View style={{ marginTop: 8 }}>
      {drill.rounds.map((round, index) => {
        let color = "red";

        let description = "";
        if (round) {
          switch (round.type) {
            case "REST":
              color = colours.blue;
              description = "Rest";
              break;
            case "WORK":
              color = colours.red;

              if (round.exrcise) {
                description = round.exrcise;
              }
              break;
            case "PREPARE":
              color = colours.green;

              description = "Prepare";
              break;
          }
        }

        return (
          <RowBottom color={color}>
            <TimeBox color={color}>{round.length}s</TimeBox>
            <DescriptionBox>{description}</DescriptionBox>
            <IndexContainer>{index}</IndexContainer>
          </RowBottom>
        );
      })}
    </View>
  );
};

export default TabataQueue;

interface RowBottomI {
  color: string;
}

const RowBottom = styled.View<RowBottomI>`
  /* border-top: 4px solid ${(props) => props.color}; */
  background: white;
  margin-bottom: 8px;
  margin-right: 8px;
`;

const IndexContainer = styled.Text`
  display: flex;
  font-style: italic;
  font-size: 30px;
  position: relative;
  top: 5px;
  left: 0px;

  opacity: 0.2;
`;

interface TimeBoxI {
  color: string;
}

const TimeBox = styled.Text<TimeBoxI>`
  display: flex;
  color: white;
  font-size: 24px;
  padding: 8px;
  background: ${(props) => props.color};
`;
const DescriptionBox = styled.Text`
  display: flex;
  padding-left: 16px;
  font-size: 20px;
`;
const RowTop = styled.View``;
