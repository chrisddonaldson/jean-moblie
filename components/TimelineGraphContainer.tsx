import React, { Component, useEffect } from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import styled from "styled-components/native";
import { colours } from "../colours";
import { Schedule, event } from "../sample_data/sample_data_types";
import { RandomId } from "../Utility/RandomId";
import { TimeToMins } from "../Utility/TimeUtil";
import { TickFactory } from "./TickFactory";
import { TimelineGraph } from "./TimelineGraph";
import { TimelineGraphLines } from "./TimelineGraphLines";
import _ from "lodash";
interface TimelineGraphContainerInterface {
  schedules: Schedule[];
}

export const TimelineGraphContainer = ({
  schedules,
}: TimelineGraphContainerInterface) => {
  let yScale = 1;

  let allEvents: event[] = [];
  // @TODO
  useEffect(() => {
    schedules.map((v) => {
      allEvents.push(...v.events);
    });

    let allTimes: {
      time: string;
      value: number;
      initialPos: number;
    }[] = [];

    allEvents.map((e, i) => {
      if ("start_time" in e.period) {
        allTimes.push({ time: e.period.start_time, value: 1, initialPos: i });
        allTimes.push({ time: e.period.end_time, value: -1, initialPos: i });
      }
    });

    allTimes.sort((a, b) => TimeToMins(a.time) - TimeToMins(b.time));

    let cumsum = [0];
    allTimes.map((v, i) => {
      cumsum.push(cumsum[i] + v.value);
    });

    let cumsumWithGroup: {
      sum: number;
      group_id: string;
    }[] = [];

    let groupIds = [RandomId()];

    cumsum.map((c, i) => {
      if (c === 0) {
        groupIds.push(RandomId());
      } else {
        groupIds.push(groupIds[i]);
      }
    });

    cumsum.map((c, i) => {
      cumsumWithGroup.push({ sum: c, group_id: groupIds[i + 1] });
    });

    interface End {
      time: string;
      value: number;
      depth: number;
      initialPos: number;
      group_id: string;
    }

    let results_array: End[] = [];

    allTimes.map((v, i) => {
      results_array.push({
        time: v.time,
        value: v.value,
        depth: cumsumWithGroup[i + 1].sum,
        group_id: cumsumWithGroup[i + 1].group_id,
        initialPos: v.initialPos,
      });
    });

    let start_time_with_depth: End[] = [];
    let end_time_with_depth: End[] = [];

    results_array.map((v) => {
      if (v.value == 1) {
        start_time_with_depth.push(v);
      } else {
        end_time_with_depth.push(v);
      }
    });

    const distinctGroups = [
      ...new Set(start_time_with_depth.map((x) => x.group_id)),
    ];

    let distinctGroupsWithDepth: { group_id: string; depth: number }[] = [];

    distinctGroups.map((v) => {
      let depth = 0;
      start_time_with_depth.map((s) => {
        if (v === s.group_id) {
          if (s.depth > depth) {
            depth = s.depth;
          }
        }
      });
      distinctGroupsWithDepth.push({ group_id: v, depth: depth });
    });

    console.log(distinctGroupsWithDepth);

    let results: { event: event; group_id: string }[] = [];

    start_time_with_depth.map((v) => {
      allEvents.map((e, i) => {
        if (i === v.initialPos) {
          results.push({ event: e, group_id: v.group_id });
        }
      });
    });

    console.log(results);
  }, []);

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
              {/* {schedules.map((v, i) => (
                <TimelineGraph
                  schedule={v}
                  yScale={yScale}
                  key={"TimelineGraph" + i}
                />
              ))} */}
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
