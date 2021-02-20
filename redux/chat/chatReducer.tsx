// src/store/chat/reducers.ts

import {
  ChatActionTypes,
  ChatState,
  DELETE_MESSAGE,
  SEND_MESSAGE,
  ON_LOAD,
  TIMER_START,
  TIMER_TICK,
  TIMER_STOP
} from "./types";

const initialState: ChatState = {
  messages: [],
  time: new Date()
};

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): ChatState {
  switch (action.type) {

      case ON_LOAD:
        console.log("On Load")

        return {
        ...state
        };
        case TIMER_START:
          // console.log("Timer Start")
         
          return {
          ...state
          };
          case TIMER_TICK:
            // console.log("Timer Tick")
            const currentTime = new Date()
            return {
            ...state,
            time: currentTime
            };
            case TIMER_STOP:
              // console.log("Timer Stop")

              return {
              ...state
              };
    default:
      return state;
  }
}
