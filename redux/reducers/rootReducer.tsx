import { combineReducers } from "redux";
import { chatReducer } from "../chat/chatReducer";
import { userReducer } from "../user/userReducer";
import { workoutReducer } from "../workouts/workoutReducer";

export const rootReducer = combineReducers({
  chat: chatReducer,
  workouts: workoutReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
