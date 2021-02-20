import React from "react"
import { useSelector } from "react-redux"
import { colours } from "../../colours"
import { GetDisplayTimeFormat } from "../../Utility/GetCurrentTime"
import { Button, Image, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
export const TimelineHeader = () => {
    const time = useSelector(state => state.chat.time)
    // console.log(time)
    return(
        <Header style={[colours.shadowStyle, { zIndex: 1 }]}>
        <HeaderLeft style={[colours.shadowStyle, { zIndex: 1 }]}>
          <Text> Civil Twlight</Text>
        </HeaderLeft>
        <HeaderMiddle>
          <TimeLabel> {GetDisplayTimeFormat(time)}</TimeLabel>
        </HeaderMiddle>
        <HeaderRight>
          {/* <NoteLabel>{time.getDay()}</NoteLabel> */}
          {/* @TODO link this up */}
          <NoteLabel>{time.toDateString()}</NoteLabel>
          <NoteLabel>Earlsfield</NoteLabel>
          <NoteLabel>17degs</NoteLabel>
        </HeaderRight>
      </Header>
    )
}

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


const TimeLabel = styled.Text`
  font-family: "Righteous_400Regular";
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