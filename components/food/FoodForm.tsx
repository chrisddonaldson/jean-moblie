import React from "react";
import { Button, StyleSheet,View } from "react-native";
import { StyledTextInput } from "../StyledTextInput";

export default function FoodForm() {
    const [name, setName] = React.useState('');
    const [protein, setProtein] = React.useState('');
    const [fat, setFat] = React.useState('');
    const [carbs, setCarbs] = React.useState('');
  return (
      <View>
          <StyledTextInput
          onChangeText={(text:string) => setName(text)}
          value={name}
          />
      <StyledTextInput
          onChangeText={(text:string) => setProtein(text)}
          value={protein}
          />      
          <StyledTextInput
          onChangeText={(text:string) => setFat(text)}
          value={fat}
          />      

          <StyledTextInput
          onChangeText={(text:string) => setCarbs(text)}
          value={carbs}
          />
          <Button
          onPress={()=>{console.log("submit")}}
          title={"Submit"}
          />
      </View>
    // <LinearGradient
    //   style={style}
    //   // Button Linear Gradient
    //   colors={["#70f1B0", "#26ADDF"]}
    // >
    //   {children}
    // </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
