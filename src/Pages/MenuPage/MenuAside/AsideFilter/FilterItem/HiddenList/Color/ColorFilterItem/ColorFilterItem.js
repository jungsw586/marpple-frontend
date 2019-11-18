import React, { Component } from "react";
import "../../../FilterItem.scss";
export class FilterItem extends Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox"></input>
          <span
            className="color-checkbox"
            style={{
              borderRadius: "8px",
              backgroundColor: this.props.name,
              borderColor:
                this.props.name === "#FFFFFF" ? "#dee2e6" : this.props.name
            }}
          ></span>
          <span className="filter-item-name">{this.props.name}</span>
        </label>
      </li>
    );
  }
}

export default FilterItem;
