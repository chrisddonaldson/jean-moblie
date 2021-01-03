import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import logo from "../assets/JeanLogoImproved-05.png";
import { colours } from "../colours";

import { event, Schedule } from "../sample_data/sample_data_types";
import { EventTicket, EventTimeline, happeningToday } from "./Schedule";
import { TimelineGraph } from "./TimelineGraph";

interface TimelineInterface {
  schedules: Schedule[];
}

export function Timeline({ schedules }: TimelineInterface) {
  let stack: event[] = [];
  schedules.forEach((v) => {
    v.events.forEach((e) => {
      stack.push(e);
    });
  });

  return (
    <Pannel
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        zIndex: 1,
      }}
    >
      <Header
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
          zIndex: 1,
        }}
      >
        <HeaderLeft
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 10,
            zIndex: 1,
          }}
        >
          <Text> Civil Twlight</Text>
        </HeaderLeft>
        <HeaderMiddle>
          <TimeLabel> 10:02am</TimeLabel>
        </HeaderMiddle>
        <HeaderRight>
          <NoteLabel>Tueday</NoteLabel>
          <NoteLabel>02/01/2021</NoteLabel>
          <NoteLabel>Earlsfield</NoteLabel>
          <NoteLabel>17degs</NoteLabel>
        </HeaderRight>
      </Header>
      <Body>
        {schedules.map((v) => {
          <TimelineGraph schedule={v} />;
        })}
      </Body>
      <Footer
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 10,
          zIndex: 1,
        }}
      ></Footer>
    </Pannel>
  );
}

const TimeLabel = styled.Text`
  font-family: "Righteous";
  color: white;
  line-height: 40px;
  font-size: 32px;
`;

const NoteLabel = styled.Text`
  color: white;
  line-height: 14px;
  font-size: 12px;
`;

const Header = styled.View`
  background-color: ${colours.darkTheme.middle};
  display: flex;
  flex-direction: row;
  min-width: 280px;
  color: white;
  font-family: "Segoe UI";
  border-bottom-color: ${colours.green};
  overflow: hidden;
  border-bottom-width: 1px;
`;
const Body = styled.View`
  background-color: ${colours.darkTheme.dark};
  display: flex;
  flex-direction: row;
  min-width: 320px;
  color: white;
  font-family: "Segoe UI";
  min-height: 300px;
`;
const Footer = styled.View`
  background-color: ${colours.darkTheme.dark};
  display: flex;
  flex-direction: row;
  min-width: 320px;
  color: white;
  font-family: "Segoe UI";
  min-height: 60px;
  border-top-color: ${colours.green};
  border-top-width: 1px;
`;
const HeaderLeft = styled.View`
  background-color: ${colours.darkTheme.light};
  flex: 1;
  padding: 4px;
`;
const HeaderMiddle = styled.View`
  flex: 3;
  padding: 4px;
`;
const HeaderRight = styled.View`
  flex: 1;
  padding: 4px;
  font-size: 12px;
`;

const Pannel = styled.View`
  background-color: ${colours.darkblue};
  border-radius: 8;
  overflow: hidden;
`;
const Line = styled.View`
  background-color: ${colours.darkblue};
`;

function mapSchedules(s: Schedule) {
  return s.events.map((v) => v);
}
