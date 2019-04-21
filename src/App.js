import React, { Component } from "react";
import { Body, AppHeader } from "./styledComponents/";
import TypeWriter from "./components/TypeWriter";
import "./assets/less/app.less";

class App extends Component {
  render() {
    return (
      <Body>
        <AppHeader>
          <h3>HELLO! I'M</h3>
          <h1>NEIL JAMES MONZALES</h1>
          <div>
            <span>I'M A </span> <TypeWriter />
          </div>
        </AppHeader>
      </Body>
    );
  }
}

export default App;
