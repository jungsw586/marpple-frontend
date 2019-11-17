import React, { Component } from "react";
import CategoryItem from "./CategoryItem";
import "./AsideCategory.scss";

export class AsideCategory extends Component {
  state = {
    mode: ""
  };

  handleMode = mode => {
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <div className="category-area">
        <h3 className="category-title">의류</h3>
        <ul className="category-list">
          <CategoryItem
            title="맨투맨"
            active={mode === "manToman"}
            selectMode={() => {
              this.handleMode("manToman");
            }}
          />
          <CategoryItem
            title="후디"
            active={mode === "hoody"}
            selectMode={() => {
              this.handleMode("hoody");
            }}
          />
          <CategoryItem
            title="집업"
            active={mode === "zipup"}
            selectMode={() => {
              this.handleMode("zipup");
            }}
          />
        </ul>
      </div>
    );
  }
}

export default AsideCategory;
