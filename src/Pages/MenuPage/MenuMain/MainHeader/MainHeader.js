import React, { Component } from "react";
import SortModal from "./SortModal/SortModal";
import "./MainHeader.scss";

export class MainHeader extends Component {
  render() {
    const { onClick, mode } = this.props;
    return (
      <div className="product-list-header">
        <span onClick={onClick}>
          추천순
          <span className="arrow" />
          <SortModal mode={mode} />
        </span>
      </div>
    );
  }
}

export default MainHeader;
