import React, { Component } from "react";
import "./ItemInfo.scss";

export class ItemInfo extends Component {
  render() {
    const { data } = this.props;
    const product_info = data.product_info.map(el => {
      return <div>{el}</div>;
    });
    const product_detail = data.product_detail.map(el => {
      return (
        <>
          <li>소재: {el.소재}</li>
          <li>제조사: {el.제조사}</li>
          <li>제조국: {el.제조국}</li>
          <li>사이즈: {el.사이즈}</li>
          <li>신축성: {el.신축성}</li>
          <li>감촉: {el.감촉}</li>
          <li>두께: {el.두께}</li>
        </>
      );
    });
    const laundry_info = data.laundry_info.map(el => {
      return <li>{el}</li>;
    });
    const model_size = data.model_size.map(el => {
      return <li>{el}</li>;
    });
    return (
      <div className="item-info">
        <div className="product-info-title">상품정보</div>
        <div className="product-basic-info">{product_info}</div>
        <ul className="product-detail-info">{product_detail}</ul>
        <div className="laundry-info-title">세탁방법</div>
        <ul className="laundry-info">{laundry_info}</ul>
        <div className="model-info-title">MODEL SIZE</div>
        <ul className="model-info">{model_size}</ul>
      </div>
    );
  }
}

export default ItemInfo;
