import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tab from "./Tab";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { withRouter } from "react-router-dom";

function MsgBoard(props) {
  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [width, setWidth] = useState(1920);
  const [view, setView] = useState(0);
  const handleRWD = () => {
    if (window.innerWidth) {
      console.log(window.innerWidth);
      setWidth(window.innerWidth);
      setView(1);
    } else {
      setView(0);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleRWD);
    handleRWD(); 

    return () => {
      window.removeEventListener("resize", handleRWD);
    };
  }, []);

  const msgList = [
    {
      sid: 1,
      title: "訊息Ａ",
      content: "AAAA",
      time: "2020-12-1"
    },
    {
      sid: 2,
      title: "訊息B",
      content: "bbbbbbb",
      time: "2020-12-2"
    },
    {
      sid: 3,
      title: "訊息C",
      content: "cccccc",
      time: "2020-12-3"
    },
    {
      sid: 4,
      title: "訊息d",
      content: "dddddddd",
      time: "2020-12-4"
    },
    {
      sid: 5,
      title: "訊息E",
      content: "eeeeeee",
      time: "2020-12-5"
    },
    {
      sid: 6,
      title: "訊息f",
      content: "fffffff",
      time: "2020-12-6"
    }
  ];
  const TabHead = styled.div`
    width: 200px;
    /* height: 80vh; */
    border: 1px solid #9b9b9b;
    display: flex;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 16px;
    }
  `;
  const Content = styled.div`
    width: 50%;
    height: 38.1rem;
    padding: 16px;
    border: 1px solid #9b9b9b;
  `;

  const Wrap = styled.div`
    width: 500px;
    display: flex;
    box-sizing: border-box;
    margin: 5rem;
    height:500px;
  `;

  const Nav = styled.p`
  margin:2rem;
  cursor:pointer;
  font-size:2rem;
`;
  return (
    <>
    <Nav onClick={()=>{props.history.push(`/`)}}>Comment board</Nav>
    <Nav onClick={()=>{props.history.push(`/imgupload`)}}>Upload img</Nav>
    <Nav onClick={()=>{props.history.push(`/msgboard`)}}>Msg board</Nav>
      {width > 320 ? (
        <Wrap>
          <div>
            <TabHead>
              <span>訊息列表</span>
              <span
                onClick={() => {
                  msgList.sort(function (a, b) {
                    return new Date(a.time) - new Date(b.time);
                  });
                  console.log("asc", msgList);
                }}
              >
                時間排序
              </span>
            </TabHead>
            {msgList.map((item, index) => {
              return (
                <Tab
                  key={index}
                  item={item}
                  setTitle={setTitle}
                  setContent={setContent}
                  setView={setView}
                />
              );
            })}
          </div>

          <Router>
            <Route path={`/msgboard/:id`}>
              <Content>
                <h1>{title}</h1>
                <p>{content}</p>
              </Content>
            </Route>
          </Router>
        </Wrap>
      ) : (
        <Wrap>
          {view === 1 ? (
            <div>
              <TabHead>
                <span>訊息列表</span>
                <span
                  onClick={() => {
                    msgList.sort(function (a, b) {
                      return new Date(a.time) - new Date(b.time);
                    });
                    console.log("asc", msgList);
                  }}
                >
                  時間排序
                </span>
              </TabHead>
              {msgList.map((item) => {
                return (
                  <Tab
                    key={item.sid}
                    item={item}
                    setTitle={setTitle}
                    setContent={setContent}
                    setView={setView}
                  />
                );
              })}
            </div>
          ) : (
            ""
          )}
          <Router>
            <Route path={`/msgboard/:id`}>
              {width <= 760 && view === 2 ? (
                <Content>
                  <h1>{title}</h1>
                  <p
                    onClick={() => {
                      setView(1);
                    }}
                  >
                    回上一頁
                  </p>
                  <p>{content}</p>
                </Content>
              ) : (
                <Content>
                  <h1>{title}</h1>
                  <p>{content}</p>
                </Content>
              )}
            </Route>
          </Router>
        </Wrap>
      )}
    </>
  );
}

export default withRouter(MsgBoard);
