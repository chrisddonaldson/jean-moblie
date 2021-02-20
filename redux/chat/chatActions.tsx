// src/store/chat/actions.ts

import {
  Message,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  ChatActionTypes,
  ON_LOAD,
  TIMER_START,
  TIMER_TICK,
  TIMER_STOP,
} from "./types";

export function onLoad(): ChatActionTypes {
  return {
    type: ON_LOAD,
 
  };
}


let timer:any = null;

export const timerStart = () => (dispatch:any) => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick()), 1000);
  dispatch({ type: TIMER_START });
  dispatch(tick())
}
export const tick = ()=>(dispatch:any) => { dispatch({type: TIMER_TICK} )};
export const timerStop = () => {
  clearInterval(timer);
  return { type: TIMER_STOP };
}

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(newMessage: Message): ChatActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage,
  };
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deleteMessage(timestamp: number): ChatActionTypes {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp,
    },
  };
}
