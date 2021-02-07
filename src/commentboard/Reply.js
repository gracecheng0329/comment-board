import React, { useState } from "react";
import { connect } from "react-redux";
import { getReply, getReplyPush } from "../action/index";
import styled from "styled-components";
import { BiSend } from "react-icons/bi";

const ReplyText = styled.textarea`
  width: 50vw;
  height: 5vh;
  background-color: #fff;
  color: #4a4a4a;
  border: none;
  resize: none;
  border-radius: 5px;
`;

function Reply(props) {
  const [textValue, setTextValue] = useState(""); //content
  const { sid, isMsg } = props;
  const sendInput = () => {
    props.getReplyPush({ [sid]: textValue });
    setTextValue("");
  };
  console.log("sid", sid, "isMsg", isMsg);
  return (
    <>
      {isMsg ? (
        <p>我的回覆：{isMsg}</p>
      ) : (
        <>
          <ReplyText
            placeholder="請回覆留言..."
            value={textValue}
            onChange={(event) => setTextValue(event.target.value)}
          ></ReplyText>
          <BiSend size="20" color="#4a4a4a" onClick={sendInput} />{" "}
        </>
      )}

      {/* </div> */}
    </>
  );
}

const mapStateToProps = (store) => {
  return {
    reply: store.reply
  };
};

export default connect(mapStateToProps, {
  getReply,
  getReplyPush
})(Reply);
