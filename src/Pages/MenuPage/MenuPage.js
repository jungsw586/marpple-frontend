import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MenuAside from "./MenuAside";
import MenuMain from "./MenuMain";
import NavBar from "Components/NavBar";
import "./MenuPage.scss";

export class MenuPage extends Component {
  render() {
    return (
      <>
        <NavBar />
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
