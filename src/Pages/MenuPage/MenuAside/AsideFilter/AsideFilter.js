import React, { Component } from "react";
import "./AsideFilter.scss";
import Brand from "./FilterItem/HiddenList/Brand";
import Color from "./FilterItem/HiddenList/Color";
import Size from "./FilterItem/HiddenList/Size";
import Style from "./FilterItem/HiddenList/Style";
import Type from "./FilterItem/HiddenList/Type";

export class AsideFilter extends Component {
  state = {
    mode: ""
  };

  handleFilter = selected => {
    this.setState({
      mode: this.state.mode === selected ? "" : selected
    });
  };

  render() {
    const { mode } = this.state;
    return (
      <div className="filter-list">
        <div className="filter-header">
          <h4 className="filter-title">필터 검색</h4>
        </div>
        <div className="filter-body">
          <ul className="filter-body-ul">
            <Brand
              selectMode={() => {
                this.handleFilter("brand");
              }}
              active={mode === "brand"}
            />
            <Color
              selectMode={() => {
                this.handleFilter("color");
              }}
              active={mode === "color"}
            />
            <Size
              selectMode={() => {
                this.handleFilter("size");
              }}
              active={mode === "size"}
            />
            <Style
              selectMode={() => {
                this.handleFilter("style");
              }}
              active={mode === "style"}
            />
            <Type
              selectMode={() => {
                this.handleFilter("type");
              }}
              active={mode === "type"}
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default AsideFilter;
