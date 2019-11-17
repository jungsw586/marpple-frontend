import React, { Component } from "react";

export class CategoryItem extends Component {
  render() {
    const { selectMode, active, title } = this.props;
    return (
      <li onClick={selectMode} className="category-items">
        <span
          // {...this.props} eventBubbling
          className={active ? "item-title highlight" : "item-title"}
        >
          {title}
        </span>
      </li>
    );
  }
}

export default CategoryItem;
