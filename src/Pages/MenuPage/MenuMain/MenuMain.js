import React, { Component } from "react";
import MainHeader from "./MainHeader/MainHeader";
import MainBody from "./MainBody/MainBody";
import "./MenuMain.scss";

export class MenuMain extends Component {
  state = {
    modal: false
  };

  handleSortModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <div className="menu-main">
        <div className="product-list-area">
          <MainHeader onClick={this.handleSortModal} mode={this.state.modal} />
          <MainBody />
        </div>
      </div>
    );
  }
}

export default MenuMain;
