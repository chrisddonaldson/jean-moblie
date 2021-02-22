// src/store/chat/types.ts


  
  export interface WorkoutState {
    workouts: any[];

  }
  
  // src/store/chat/types.ts
  export const GET_WORKOUTS = "GET_WORKOUTS";
  export const UPDATE_WORKOUT = "UPDATE_WORKOUT";

  
interface GetWorkoutAction {
    type: typeof GET_WORKOUTS;
    payload: any;
  }
   
interface UpdateWorkoutAction {
  type: typeof UPDATE_WORKOUT;
  payload: any;
}
  
  export type WorkoutActionTypes =GetWorkoutAction |UpdateWorkoutAction;
  