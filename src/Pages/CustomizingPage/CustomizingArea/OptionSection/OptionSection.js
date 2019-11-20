import React, { Component } from "react";
import "./OptionSection.scss";

export class OptionSection extends Component {
  render() {
    const { data } = this.props;
    const color = data.color;
    const size = data.size;
    const color_list = color.map(el => {
      return <div className="color-item" style={{ backgroundColor: el }}></div>;
    });
    const size_list = size.map(el => {
      return <li>{el}</li>;
    });
    return (
      <div
        className="option-section"
        style={{ display: this.props.active ? "block" : "none" }}
      >
        <div className="selector-area">
          <div className="item-name">{data.name}</div>
          <div className="item-price">{data.price.toLocaleString()}원</div>
          <div className="item-change">
            <div className="item-change-btn">상품변경</div>
          </div>
          <div className="color-section">
            <div className="color-title">색상</div>
            <div className="color-list">{color_list}</div>
          </div>
          <div className="size-section">
            <div className="size-title">사이즈</div>
            <ul className="size-list">{size_list}</ul>
          </div>
        </div>
        <div className="button-area">
          <div className="button-box">
            <div className="button-text">장바구니 담기</div>
          </div>
        </div>
      </div>
    );
  }
}

export default OptionSection;
