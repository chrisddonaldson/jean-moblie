// src/store/chat/types.ts

export interface Workout {
    
  }
  
  export interface WorkoutState {
    workouts: any[];

  }
  
  // src/store/chat/types.ts
  export const GET_WORKOUTS = "GET_WORKOUTS";

  
  interface GetWorkoutAction {
    type: typeof GET_WORKOUTS;
    payload: any;
  }
 
  
  export type WorkoutActionTypes =GetWorkoutAction;
  