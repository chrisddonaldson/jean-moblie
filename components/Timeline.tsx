import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import logo from "../assets/JeanLogoImproved-05.png";
import { colours } from "../colours";

import { event, Schedule } from "../sample_data/sample_data_types";
import { EventTicket, EventTimeline, happeningToday } from "./Schedule";

interface TimelineInterface {
  schedules: Schedule[];
}

export function Timeline({ schedules }: TimelineInterface) {
  let stack: event[] = [];
  schedules.forEach((v) => {
    v.events.forEach((e) => {
      console.log(e);
      stack.push(e);
    });
  });

  console.log(stack);
  return (
    <>
      <View>
        {stack.map((v) => (
          <EventTimeline e={v} view={"TODAY"} />
        ))}
      </View>
      <View>
        <Pannel>
          {stack.map((v) => (
            <TimeLine e={v} />
          ))}
        </Pannel>
      </View>
    </>
  );
}

function TimeLine(e: event) {
  return <Line></Line>;
}

const Pannel = styled.View`
  background-color: ${colours.darkblue};
  padding: 16px;
`;
const Line = styled.View`
  background-color: ${colours.darkblue};
`;

function mapSchedules(s: Schedule) {
  return s.events.map((v) => v);
}
