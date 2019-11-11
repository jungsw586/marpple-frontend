import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MenuAside from "./MenuAside";
import MenuMain from "./MenuMain";
import "./MenuPage.scss";

export class MenuPage extends Component {
  render() {
    return (
      <>
        <div className="NavBar">WE-MARPPLE</div>
        <div className="menu-page">
          <div className="menu-container">
            <MenuAside />
            <MenuMain />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(MenuPage);
