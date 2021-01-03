import React, { Component } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { colours } from "../colours";
import { Schedule } from "../sample_data/sample_data_types";
import { TickFactory } from "./TickFactory";
import { TimelineGraph } from "./TimelineGraph";
import { TimelineGraphLines } from "./TimelineGraphLines";

interface TimelineGraphContainerInterface {
  schedules: Schedule[];
}

export const TimelineGraphContainer = ({
  schedules,
}: TimelineGraphContainerInterface) => {
  let yScale = 1;
  return (
    <Container>
      <Header style={[colours.shadowStyle, { zIndex: 3 }]}>
        <Dot />
        <Text style={{ color: "white" }}>Chris</Text>
      </Header>
      <Body>
        <BodyScroll
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: "100%",
            position: "absolute",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "stretch",
              borderWidth: 1,
            }}
          >
            <EventsCol style={[colours.shadowStyle, { elevation: 12 }]}>
              {schedules.map((v, i) => (
                <TimelineGraph
                  schedule={v}
                  yScale={yScale}
                  key={"TimelineGraph" + i}
                />
              ))}
            </EventsCol>

            <TickFactory yScale={yScale} />

            <BlocksCol>
              {schedules.map((v, i) => (
                <TimelineGraphLines
                  schedule={v}
                  yScale={yScale}
                  key={"TimelineGraphLines" + i}
                />
              ))}
            </BlocksCol>
          </View>
        </BodyScroll>
      </Body>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${colours.darkTheme.middle};
  margin: 4px;
  border-radius: 4px;
  flex: 1;
  overflow: hidden;
`;
const Body = styled.View`
  flex-direction: row;
  display: flex;
  flex: 1;
`;
const BodyScroll = styled.ScrollView`
  /* position: relative; */
  min-width: 280px;

  display: flex;
  flex: 1;
  flex-direction: row;
`;
const EventsCol = styled.View`
  background-color: ${colours.darkTheme.light};
  /* min-width: 64px;
  max-width: 320px; */

  display: flex;
  z-index: 2;
  flex: 1;
`;

const BlocksCol = styled.View`
  background-color: ${colours.darkTheme.middle};
  flex: 1;
`;

const Header = styled.View`
  background-color: ${colours.darkTheme.light};
  flex-direction: row;
  color: white;
  padding: 4px;
  align-items: center;
`;
const Dot = styled.View`
  background-color: ${colours.green};
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 4px;
`;
