import React, { Component } from "react";
import AsideCategory from "./AsideCategory";
import AsideFilter from "./AsideFilter";
import "./MenuAside.scss";

export class MenuAside extends Component {
  render() {
    return (
      <aside className="product-list-aside">
        <AsideCategory />
        <AsideFilter />
      </aside>
    );
  }
}

export default MenuAside;
