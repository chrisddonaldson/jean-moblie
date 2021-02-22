// src/store/chat/types.ts


  
  export interface UserState {
    user_id: string;

  }
  
  export const SET_USER = "SET_USER";

  
interface SetUserAction {
    type: typeof SET_USER;
    payload: string;
  }
   

  
  export type UserActionTypes = SetUserAction ;
  