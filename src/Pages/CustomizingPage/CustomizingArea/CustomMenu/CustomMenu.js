import React, { Component } from "react";
import MenuItem from "./MenuItem/MenuItem";
import customMenuDATA from "DATA/customMenuDATA";
import "./CustomMenu.scss";

export class CustomMenu extends Component {
  render() {
    const menuList = customMenuDATA.map(el => {
      return <MenuItem name={el.name} icon={el.icon} />;
    });
    return (
      <div className="make-menu">
        <div className="menu-item-container">{menuList}</div>
      </div>
    );
  }
}

export default CustomMenu;
