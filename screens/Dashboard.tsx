import * as React from "react";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import { useSelector } from "react-redux";
import styled from "styled-components/native";

import { colours } from "../colours";
import BackgroundEnvironment from "../components/BackgroundEnvironment";
import Logo from "../components/Logo";
import Schedule from "../components/Schedule";
import { Timeline } from "../components/Timeline";
import { chatReducer } from "../redux/chat/chatReducer";
import { brieData } from "../sample_data/brie";
import { chrisData } from "../sample_data/chris";

export default function Dashboard({ navigation }) {
  const data1 = chrisData;
  const state = useSelector((state) => state.chat);
  console.log(state);
  return (
    <BackgroundEnvironment style={styles.container}>
      <Header>
        <LeftContainer>
          <LogoBox>
            <Logo />
          </LogoBox>
          <View style={{ justifyContent: "flex-end" }}>
            <Breadcrumb>Dashboard</Breadcrumb>
          </View>
        </LeftContainer>
        {/* <Button
          onPress={() => navigation.navigate("Notifications")}
          title="Go to notifications"
        /> */}
        <Button onPress={() => navigation.openDrawer()} title="Nav" />
      </Header>
      <Body>
        {/* <View style={{ marginRight: 8 }}>
          <ColHeading>Info</ColHeading>
          <StatsBox
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,

              elevation: 2,
            }}
          >
            <Stat>
              Name: {data.firstName} {data.secondName}
            </Stat>
            <Stat>Gender: {data.gender}</Stat>
            <Stat>Current Weight: {data.weight}kg</Stat>
            <Stat>Date of Birth: {data.dateOfBirth}</Stat>
            <Stat>Weight Goal: {data.weightGoal}</Stat>
            <Stat>Number of Schedules: {data.schedules.length}</Stat>
          </StatsBox>
        </View>
        {data.schedules.map((v, i) => (
          <View style={{ marginRight: 8 }} key={"ColContainer" + i}>
            <ColHeading>Events: {v.name}</ColHeading>
            <Schedule schedule={v} view={"ALL"} />
          </View>
        ))}
        {/* {data.schedules.map((v) => (
          <Schedule schedule={v} view={"TODAY"} />
        ))} */}
        {/* <View style={{ marginRight: 8, flex: 1 }}>
          <ColHeading>Timeline</ColHeading> */}
        <Timeline schedules={chrisData.schedules} />
        <Timeline schedules={brieData.schedules} />
        {/* </View>*/}
      </Body>
    </BackgroundEnvironment>
  );
}

const Breadcrumb = styled.Text`
  font-size: 32px;
  line-height: 32px;
  font-family: "Righteous";
  color: ${colours.green};
  /* vertical-align: bottom; */
  /* border: 1px solid red; */
  margin: 8px;
`;

const LeftContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const LogoBox = styled.View`
  background-color: ${colours.darkTheme.light};
  padding-left: 16px;
  height: 100%;
  padding-right: 16px;
  justify-content: center;
`;

const Body = styled.View`
  /* border: 1px solid red; */
  flex: 1;

  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  margin: 8px;
  display: flex;
`;
const StatsBox = styled.View`
  /* border: 1px solid black; */
  padding: 8px;
  width: auto;
  background-color: ${colours.darkblue};
  border-radius: 8px;
`;

const H1Text = styled.Text`
  color: white;
`;
const Stat = styled.Text`
  color: white;
  text-transform: capitalize;
`;

const ColHeading = styled.Text`
  color: ${colours.darkblue};
  text-transform: capitalize;
  font-size: 18px;
  font-weight: bold;
`;
const Header = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  max-height: 64px;
  background-color: ${colours.darkblue};
  justify-content: space-between;

  padding-right: 16px;
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
