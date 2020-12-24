import React, { FunctionComponent } from "react";
import { ScrollView } from "react-native";

import styled from "styled-components/native";
import { Drill } from "./SampleDrills";

import { TabataEngine } from "./tabataEngine";
import TabataQueue from "./tabataQueue";

interface TabataDisplayInterface {
  drill: Drill;
}

export const TabataDisplay: FunctionComponent<TabataDisplayInterface> = ({
  drill,
}) => {
  return (
    <Container>
      <Top>
        <TabataEngine drill={drill} />
      </Top>

      <Bottom>
        <TabataQueue drill={drill} />
      </Bottom>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;

const Top = styled.View`
  flex: 1;
`;
const Bottom = styled(ScrollView)`
  flex: 1;
`;
