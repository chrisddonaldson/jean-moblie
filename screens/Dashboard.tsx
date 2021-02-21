import * as React from "react";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";

import { colours } from "../colours";
import {BackgroundEnvironment} from "../components/BackgroundEnvironment";
import { Timeline } from "../components/DailyTimeline/Timeline";
import Logo from "../components/Logo";
import Schedule from "../components/Schedule";
import { chatReducer } from "../redux/chat/chatReducer";
import { brieData } from "../sample_data/brie";
import { chrisData } from "../sample_data/ChrisSunday2";

export default function Dashboard({ navigation }) {
  const data1 = chrisData;
  // const state = useSelector((state) => state.chat);

  return (
    <BackgroundEnvironment navigation={navigation} breadcrumb={"Dashboard"}>
     
      <Body>
        <Timeline schedules={chrisData.schedules} />
      </Body>
    </BackgroundEnvironment>
  );
}



const Body = styled.View`
  /* border: 1px solid red; */
  flex: 1;

  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  margin: 8px;
  display: flex;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
