import React, { FunctionComponent } from "react";

import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "../components/Themed";
import { SafeAreaView, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { colours } from "../colours";
import Logo from "./Logo";

interface BackgroundEnvironment {
navigation: any
breadcrumb: string
hideToolbar?: boolean
}

export  const BackgroundEnvironment: FunctionComponent<BackgroundEnvironment> = ({ children, navigation,breadcrumb, hideToolbar=false }) => {
  console.log(hideToolbar)

  return (
    <LinearGradient
      style={{flex: 1, display: "flex" }}
      // Button Linear Gradient
      colors={["#70f1B0", "#26ADDF"]}
    >

      <Header hideToolbar={hideToolbar}>
        <LeftContainer>
          {/* <LogoBox>
            <Logo />
          </LogoBox> */}
          <BreadcrumbContainer style={{ justifyContent: "flex-end" }}>
            <Breadcrumb>{breadcrumb}</Breadcrumb>
          </BreadcrumbContainer>
        </LeftContainer>

        <NavButton onPress={() => navigation.openDrawer()} >

        <NavBar/>  <NavBar/>  <NavBar/>
  
          </NavButton>
      </Header>
{/* <ChildrenContainer> */}
      {children}
      {/* </ChildrenContainer> */}
    </LinearGradient>
  );
}

const ChildrenContainer =  styled.ScrollView`
flex:1;
display: flex;
`

const NavButton = styled.TouchableOpacity`
display: flex;
justify-content:content;
align-items: flex-end;
`
const NavBar = styled.View`
width: 32px;
height: 3px;
margin-top: 6px;
background-color: ${colours.green};
`

const Breadcrumb = styled.Text`
  font-size: 32px;
  line-height: 32px;
  font-family: "Righteous_400Regular";
  color: ${colours.green};
  background-color: ${colours.darkTheme.light};
  margin: 8px;
`;
const BreadcrumbContainer = styled.View`
  background-color: ${colours.darkTheme.light};
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
interface HeaderI {
  hideToolbar: boolean
}

const Header = styled.View<HeaderI>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  max-height: 80px;
  background-color: ${colours.darkblue};
  justify-content: space-between;
  display: ${props=> props.hideToolbar ? 'none': 'flex'};

  padding-right: 16px;
`;