// src/store/chat/reducers.ts


import { SET_USER, UserActionTypes, UserState  } from "./userTypes";



const initialState: UserState = {
  user_id: ""
};

export function userReducer(
      state = initialState,
      action: UserActionTypes
): UserState {
  switch (action.type) {

  
        case SET_USER:
          return{
            ...state,
            user_id: action.payload
          }
    default:
      return state;
  }
}
