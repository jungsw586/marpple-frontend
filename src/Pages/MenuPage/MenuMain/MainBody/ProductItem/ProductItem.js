import React, { Component } from "react";
import "./ProductItem.scss";

export class ProductItem extends Component {
  render() {
    const { color, size, image, name, price } = this.props;
    const colorList = color.map(el => (
      <div
        className="colorSpan"
        style={{
          backgroundColor: el,
          borderColor: el === "#FFFFFF" ? "#dee2e6" : el
        }}
      ></div>
    ));
    const minSize = size[0];
    const maxSize = size[size.length - 1];

    return (
      <div className="product-item-container">
        <div className="item-image-container">
          <div
            className="item-image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="onHover">
            <div className="onHover-text">
              Start Creating
              <div className="dot top-left" />
              <div className="dot top-right" />
              <div className="dot bottom-left" />
              <div className="dot bottom-right" />
            </div>
          </div>
        </div>
        <div className="item-spec">
          <div className="item-color">{colorList}</div>
          <div className="item-size">
            {minSize} ~ {maxSize}
          </div>
          <div className="item-name">{name}</div>
          <div className="item-price">
            <span>{price} ~</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
