import { combineReducers } from "redux";

import { msg, msgIndex } from "./msg";
import reply from "./reply";

export const rootReducer = combineReducers({
  msg,
  msgIndex,
  reply
});
