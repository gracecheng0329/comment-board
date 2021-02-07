import {
  GET_MSG,
  GET_MSG_Index,
  GET_REPLY,
  DELETE_COMMENT
} from "./actionTypes";
export const getMsg = (payload) => {
  // console.log('payload',payload)

  return { type: GET_MSG, payload: payload };
};
let msgObj = {};
export const getMsgPush = (newMsg) => {
  msgObj = { ...msgObj, ...newMsg };
  return function getMsgFunc(dispatch) {
    console.log('newMsg',newMsg)
    dispatch(getMsg(msgObj));
  };
};

export const getMsgIndex = (payload) => {
  // console.log('payload',payload)

  return { type: GET_MSG_Index, payload: payload };
};
let msgIndexArr = [];
export const getMsgIndexPush = (newMsg) => {
  msgIndexArr.unshift(newMsg);
  return function getMsgFunc(dispatch) {
    // console.log('newMsg',newMsg)
    dispatch(getMsgIndex(msgIndexArr));
  };
};

export const getReply = (payload) => {
  return { type: GET_REPLY, payload: payload };
};
let replyObj = {};
export const getReplyPush = (newMsg) => {
  replyObj = { ...replyObj, ...newMsg };
  return function getReplyFunc(dispatch) {
    dispatch(getReply(replyObj));
  };
};
export const delMsgIndexStore = (payload) => {
  console.log("payload", payload);
  return { type: DELETE_COMMENT, payload };
};
let newMsgIndex = [];
export const delMsgIndex = (newMsgIndex) => {
  // console.log('newMsgIndex',newMsgIndex)
  return function getMsgFunc(dispatch) {
    dispatch(delMsgIndexStore(newMsgIndex));
  };
};
