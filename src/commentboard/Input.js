import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getMsg, getMsgPush, getMsgIndexPush } from "../action/index";

import styled from "styled-components";

const Text = styled.input`
  width: 59vw;
  height: 15vh;
  border: 1px solid #9b9b9b;
  resize: none;
  border-radius: 5px;
  ::placeholder {
    color: #9b9b9b;
  }
  @media (max-width: 320px) {
    /* margin:auto; */
    width: 80vw;
    padding: 8px;
  }
`;

function Input(props) {
  const Button = styled.button`
    width: 80px;
    height: 30px;
    background-color: #4a4a4a;
    border-radius: 5px;
    color: #fff;
    margin-top: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    @media (max-width: 320px) {
      margin-left: auto;
    }
  `;
  const [textValue, setTextValue] = useState(""); //content
  const [msgIndex, setMsgIndex] = useState(0);
  const sendInput = () => {
    props.getMsgPush({ [msgIndex]: textValue });
    props.getMsgIndexPush(msgIndex);
    let nowIndex = msgIndex;
    setMsgIndex(nowIndex + 1);
    setTextValue("");
  };

  return (
    <>
      <Text
        placeholder="請輸入留言..."
        value={textValue}
        onChange={(event) => setTextValue(event.target.value)}
      ></Text>
      <Button onClick={sendInput}>留言</Button>
    </>
  );
}
const mapStateToProps = (store) => {
  return { msg: store.msg };
};

export default connect(mapStateToProps, {
  getMsg,
  getMsgPush,
  getMsgIndexPush
})(Input);
