import { GET_REPLY } from "../action/actionTypes";

export default function reply(state = [], action) {
  switch (action.type) {
    case GET_REPLY:
      console.log("GET_REPLY action.payload", action.payload);
      return action.payload;
    default:
      return state;
  }
}
