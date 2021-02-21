// src/store/chat/actions.ts

import { apiUrl } from "../../Utility/Environment";
import { GET_WORKOUTS, WorkoutActionTypes } from "./workoutTypes";



  export const getWorkouts = (dispatch, getState) => {
    fetch(apiUrl+'/api/workouts', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }).then(resp=>resp.json()).then(json =>{
        dispatch( {
            type: GET_WORKOUTS,
            payload: json
          })
        })
      .catch(e=>{console.log(e)})

  }
  