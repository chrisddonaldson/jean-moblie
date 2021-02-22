// src/store/chat/reducers.ts


import { GET_WORKOUTS, UPDATE_WORKOUT, WorkoutActionTypes, WorkoutState } from "./workoutTypes";

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
        
        case UPDATE_WORKOUT:

       
          console.log("REDUCER")
          console.log(action)
          console.log(state.workouts)
          return{
            ...state
          }
    default:
      return state;
  }
}
