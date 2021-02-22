import styled from "styled-components/native"
import * as React from "react";
import { FunctionComponent, useState } from "react";
import { NativeSyntheticEvent, TextInput, TextInputSubmitEditingEventData } from "react-native";

interface CustomTextInput {
    lable: string
    initialValue: string
    onChangeText?: ((text: string) => void) | undefined
    onSubmit? : (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void | undefined
}

export const CustomTextInput  = ({lable,onChangeText,initialValue,onSubmit}:CustomTextInput) => {
// console.log("")
    const [value, setValue] = useState(initialValue)


    return (
        <CTextInput
            onSubmitEditing={(e)=>{
                // console.log(e);
                if(onSubmit!=undefined){
                    onSubmit(e);
                }}}
          onChangeText={text => {
              setValue(text); 
              if(onChangeText!=undefined){
                onChangeText(text)
              }
            }}

          value={value}
        />
      )
}


const CTextInput = styled.TextInput`
/* height: 40px; */
flex:1;
color: white;
`