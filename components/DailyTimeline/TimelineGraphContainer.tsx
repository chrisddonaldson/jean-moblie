import React, { Component, useEffect, useMemo, useState } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import styled from "styled-components/native";
import { colours } from "../../colours";
import { Schedule, event } from "../../sample_data/sample_data_types";
import { RandomId } from "../../Utility/RandomId";
import { TimeToMins } from "../../Utility/TimeUtil";
import { TickFactory } from "./TickFactory";
import { TimelineGraph } from "./TimelineGraph";
import { TimelineGraphLines } from "./TimelineGraphLines";
import _ from "lodash";
import { EventsByDetph, EventByDepth } from "../../Utility/EventsByDepth";
import { CurrentTime, CurrentTimeOffsetCalc } from "./CurrentTime";
import { useScrollToTop } from '@react-navigation/native';
import { useSelector } from "react-redux";

interface TimelineGraphContainerInterface {
  schedules: Schedule[];
  yScale: number;
}

export const TimelineGraphContainer = ({
  schedules,
  yScale,
}: TimelineGraphContainerInterface) => {
  let [currentScroll, setCurrentScroll] = useState(0);
  const eventsByDepth = useMemo(() =>     EventsByDetph(schedules),[schedules]);
  useEffect(()=>{console.log(eventsByDepth)},[eventsByDepth])
  const scrollRef = React.useRef();
  const time = useSelector(state => state.chat.time)
  useEffect(()=>{scrollRef.current?.scrollTo({
    y: CurrentTimeOffsetCalc(time, yScale)-200,
    animated: true,
});},[time])


  

  return (
    <Container>
      <Header style={[colours.shadowStyle, { zIndex: 3 }]} >
        <Dot />
        <Text style={{ color: "white" }}>Chris</Text>
      </Header>
      <Body>
        <BodyScroll
          showsVerticalScrollIndicator={false}
          onScroll={event => { 
            setCurrentScroll(event.nativeEvent.contentOffset.y)
          }}
          ref={scrollRef}
          scrollEventThrottle={16}
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
              height: "auto"
            }}
          >
            <EventsCol style={[colours.shadowStyle, { elevation: 12 }]}>
              {eventsByDepth !== undefined
                ? eventsByDepth.map((v, i) => (
                    <TimelineGraph
                      eventByDepth={v}
                      yScale={yScale}
                      key={"TimelineGraph" + i}
                    />
                  ))
                : null}
            </EventsCol>

            <TickFactory yScale={yScale} />

            <BlocksCol>
              {eventsByDepth !== undefined
                ? eventsByDepth.map((v, i) => (
                    <TimelineGraphLines
                      eventByDepth={v}
                      yScale={yScale}
                      key={"TimelineGraph" + i}
                    />
                  ))
                : null}
              <CurrentTime yScale={yScale}></CurrentTime>
            </BlocksCol>
          </View>
        </BodyScroll>
      </Body>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${colours.darkTheme.middle};
  margin: 1px;
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
