// src/store/chat/actions.ts

import { apiUrl } from "../../Utility/Environment";
import { GET_WORKOUTS, UPDATE_WORKOUT, WorkoutActionTypes } from "./workoutTypes";



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
  // TypeScript infers that this function is returning SendMessageAction
export function updateWorkout(update) {
  // console.log("WORKOUT DISPATCHED")
  return {
    type: UPDATE_WORKOUT,
    payload: update,
  };
}
  // export const updateWorkout = (dispatch, getState) => {
  //   // comments[updatedComment.id] = updatedComment;
  //   console.log("action")
  //   console.log(update)
  //   // fetch(apiUrl+'/api/workouts', {
  //   //     method: 'POST',
  //   //     headers: {
  //   //       Accept: 'application/json',
  //   //       'Content-Type': 'application/json',
  //   //     }
  //   //   }).then(resp=>resp.json()).then(json =>{
  //   //     dispatch( {
  //   //         type: UPDATE_WORKOUTS,
  //   //         payload: json
  //   //       })
  //   //     })
  //   //   .catch(e=>{console.log(e)})

  // }