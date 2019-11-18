import React, { Component } from "react";
import "./SortModal.scss";

export class SortModal extends Component {
  render() {
    return (
      <div className={this.props.mode ? "sortModal" : "none"}>
        <div className="sort-modal-header">
          추천순
          <span className="arrowUp" />
        </div>
        <ul className="sort-list">
          <li>추천순</li>
          <li>낮은가격순</li>
          <li>높은가격순</li>
        </ul>
      </div>
    );
  }
}

export default SortModal;
