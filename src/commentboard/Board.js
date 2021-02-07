import React, { useEffect } from "react";
import styled from "styled-components";
import { ImCross } from "react-icons/im";
import Input from "./Input";
import Reply from "./Reply";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Tabs from '../components/Tabs'
import {
  getMsg,
  getMsgPush,
  // getMsgPushIndex,
  getReply,
  getReplyPush,
  // DELETE_COMMENT,
  delMsgIndexStore,
  delMsgIndex
} from "../action/index";

const Card = styled.div`
  width: 60vw;
  border: 1px solid #9b9b9b;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-content: start;
  padding: 16px;
  margin: 3rem auto;
  @media (max-width: 320px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: start;
    width: 100vw;
    padding: 8px;
  }
`;

const Line = styled.div`
  width: 60vw;
  height: 30px;
  border-top-style: solid;
  border-top-color: #4a4a4a;
  border-top-width: 3px;
  margin-top: 20px;
  padding: 16px;
  color: #4a4a4a;
  text-align: center;
  @media (max-width: 320px) {
    margin-left: auto;
    width: 70vw;
  }
`;
const Comment = styled.div`
  width: 60vw;
  height: 50vh;
  background-color: #ddd;
  color: #4a4a4a;
  padding: 16px;
  text-align: right;
  overflow-y: auto;
  @media (max-width: 320px) {
    margin-left: auto;
    width: 70vw;
  }
`;
const Nav = styled.p`
  margin:2rem;
  cursor:pointer;
  font-size:2rem;
`;


function Board(props) {
  const { msg, msgIndex, reply } = props;
  // const idList = msg.keys(list);
  useEffect(() => {
    console.log("msg", msg);
    console.log("reply", reply);
    console.log("msgIndex", msgIndex);
  }, [msg, props, msgIndex]);

  const deleteComment = (delItem) => {
    console.log("delItem", delItem);
    let newArr = msgIndex.filter((msgIndexItem) => msgIndexItem !== delItem);
    console.log("newArr", newArr);
    props.delMsgIndex(newArr);
  };

  return (
    <>
    <Nav onClick={()=>{props.history.push(`/`)}}>Comment board</Nav>
    <Nav onClick={()=>{props.history.push(`/imgupload`)}}>Upload img</Nav>
    <Nav onClick={()=>{props.history.push(`/msgboard`)}}>Msg board</Nav>

      <Card>
        <Input />
        {msgIndex.length > 0 ? (
          <Comment>
            {msgIndex.map((item, index) => {
              return (
                <>
                  <ImCross
                    color="black"
                    size="10"
                    onClick={() => deleteComment(item)}
                  />
                  <p key={index}></p>
                  <p>{msg[item]}</p>
                  <p>Reply</p>
                  <Reply sid={item} isMsg={reply[item]} />
                </>
              );
            })}
          </Comment>
        ) : (
          <Line>目前沒有訊息</Line>
        )}
      </Card>
    </>
  );
}

const mapStatetoProps = (store) => {
  return {
    msg: store.msg,
    msgIndex: store.msgIndex,
    reply: store.reply
  };
};
export default withRouter(connect(mapStatetoProps, {
  getMsg,
  getMsgPush,
  // getMsgPushIndex,
  getReply,
  getReplyPush,
  // DELETE_COMMENT,
  delMsgIndexStore,
  delMsgIndex
})(Board));
