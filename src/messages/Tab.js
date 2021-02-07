import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
function Tab(props) {
  const { item, setTitle, setContent, setView } = props;
  const Tab = styled.div`
    width: 200px;
    height: 4rem;
    border: 1px solid #9b9b9b;
    display: flex;
    justify-content: space-between;
    align-content: space-around;
    flex-wrap: wrap;
    padding: 16px;
    color: #4a4a4a;
  `;
  return (
    <>
      <Tab
        onClick={() => {
          setTitle(item.title);
          setContent(item.content);
          setView(2);
          props.history.push(`/msgboard/${item.sid}`);
        }}
      >
        <div>
          <p>{item.title}</p>
          <p>{item.content}</p>
        </div>
        <p>{item.time}</p>
      </Tab>
    </>
  );
}

export default withRouter(Tab);
