import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MenuAside from "./MenuAside";
import MenuMain from "./MenuMain";
import NavBar from "Components/NavBar";
import Footer from "Components/Footer";
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
        <Footer />
      </>
    );
  }
}

export default withRouter(MenuPage);
