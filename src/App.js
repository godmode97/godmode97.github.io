import React, { Component } from "react";
import logo from "./logo.svg";
import { Button } from "antd";
import Application from "./styledComponents/AppStyled";
import AppLogo from "./styledComponents/AppLogoStyled";
import AppHeader from "./styledComponents/AppHeaderStyled";
import Navigation from "./styledComponents/NavigationStyled";
import "./assets/less/app.less";

class App extends Component {
  render() {
    return (
      <Application>
        <AppHeader>
          <AppLogo src={logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Navigation
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </Navigation>
          <Button type="primary">Ant Design Button</Button>
        </AppHeader>
      </Application>
    );
  }
}

export default App;
