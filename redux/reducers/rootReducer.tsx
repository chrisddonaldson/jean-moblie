import { combineReducers } from "redux";
import { chatReducer } from "../chat/chatReducer";
import { workoutReducer } from "../workouts/workoutReducer";

export const rootReducer = combineReducers({
  chat: chatReducer,
  workouts: workoutReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
