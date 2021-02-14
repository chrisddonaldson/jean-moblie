import * as React from "react";
import { TextInput } from 'react-native';
import { TextProps } from "./Themed";

export function StyledTextInput(props:any) {
  return (
    <TextInput {...props} style={[props.style]} />
  );
}
