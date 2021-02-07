import { GET_MSG, GET_MSG_Index, DELETE_COMMENT } from "../action/actionTypes";

export function msg(state = [], action) {
  switch (action.type) {
    case GET_MSG:
      console.log("action.payload", action.payload);
      return action.payload;
    default:
      return state;
  }
}

export function msgIndex(state = [], action) {
  switch (action.type) {
    case GET_MSG_Index:
      console.log("1", action.payload);
      return action.payload;
    case DELETE_COMMENT:
      console.log("刪除評論", action.payload);
      return action.payload;
    default:
      return state;
  }
}
