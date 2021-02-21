// src/store/chat/reducers.ts


import { DrawerContentScrollView } from "@react-navigation/drawer";
import { GET_WORKOUTS, WorkoutActionTypes, WorkoutState } from "./workoutTypes";

const initialState: WorkoutState = {
  workouts: []
};

export function workoutReducer(
  state = initialState,
  action: WorkoutActionTypes
): WorkoutState {
  switch (action.type) {

      case GET_WORKOUTS:

      
        console.log(action)
        return {
        ...state,
        workouts: action.payload
        };
 
    default:
      return state;
  }
}
