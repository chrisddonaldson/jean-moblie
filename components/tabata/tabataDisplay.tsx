import React, { FunctionComponent } from "react";

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
      <Left>
        <TabataEngine drill={drill} />
      </Left>
      <Right>
        <ScollContainer>
          <TabataQueue drill={drill} />
        </ScollContainer>
      </Right>
    </Container>
  );
};

const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
`;

const ScollContainer = styled.View`
  position: absolute;
  width: 100%;
`;

const Left = styled.View`
  flex: 1;
`;
const Right = styled.View`
  flex: 1;
  position: relative;

  min-height: 400px;
`;
