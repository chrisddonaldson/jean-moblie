import { SET_USER} from "./userTypes";

export function setUser(payload: string) {
  // console.log("WORKOUT DISPATCHED")
  return {
    type: SET_USER,
    payload,
  };
}
