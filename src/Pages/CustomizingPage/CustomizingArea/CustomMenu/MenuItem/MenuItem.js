import React, { Component } from "react";
import "./MenuItem.scss";

export class MenuItem extends Component {
  render() {
    return (
      <div className="menu-item">
        <div className="icon-container">
          <div
            className="icon"
            style={{
              backgroundImage: `url(${this.props.icon})`
            }}
          ></div>
        </div>
        <div className="text-container">
          <div className="text">{this.props.name}</div>
        </div>
      </div>
    );
  }
}

export default MenuItem;
