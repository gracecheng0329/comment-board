// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Board from "./commentboard/Board";
import MsgBoard from "./messages/MsgBoard";
import ImgUpload from "./img_upload/ImgUpload";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact>
          <Board />
        </Route>
        <Route path="/msgboard">
          <MsgBoard />
        </Route>
        <Route path="/imgupload">
          <ImgUpload />
        </Route>
      </Router>
    </>
  );
}

export default App;
