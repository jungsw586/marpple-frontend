import React, { Component } from "react";
import "./FilterItem.scss";
export class FilterItem extends Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox"></input>
          <span className="checkbox"></span>
          <span className="filter-item-name">{this.props.name}</span>
        </label>
      </li>
    );
  }
}

export default FilterItem;
