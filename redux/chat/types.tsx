// src/store/chat/types.ts

export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

export interface ChatState {
  messages: Message[];
  time: Date;
}

// src/store/chat/types.ts
export const SEND_MESSAGE = "SEND_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const ON_LOAD = "ON_LOAD";
export const TIMER_START = "TIMER_START";
export const TIMER_TICK = "TIMER_TICK";
export const TIMER_STOP = "TIMER_STOP";

interface TimerStartAction {
  type: typeof TIMER_START;
}
interface TimerTickAction {
  type: typeof TIMER_TICK;
}

interface TimerStopAction {
  type: typeof TIMER_STOP;
}

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

interface onLoadAction {
  type: typeof ON_LOAD;
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
  meta: {
    timestamp: number;
  };
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction | onLoadAction | TimerStartAction | TimerTickAction |TimerStopAction;
