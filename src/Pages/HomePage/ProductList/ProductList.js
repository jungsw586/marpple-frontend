import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductList.scss";

export default class ProductList extends Component {
  render() {
    return (
      <div className="homepage-product-list-body">
        <div className="homepage-product-list-header">
          <Link className="product-list-title" to={"/menu"}>
            의류 커스텀
          </Link>
          <Link className="product-list-goDetail" to={"/menu"}>
            모두 보기
          </Link>
        </div>
        <div className="product-list-content">
          <div className="product-list-content-product">
            <img
              className="product-list-img"
              src={
                "https://s3.marpple.co/files/u_29089/2018/12/original/f_16706_1543905386444_MQm9mHK2f3ntl4SZ8m3Xu.jpg"
              }
              alt="product-list-img"
            />
            <div className="product-list-content-text">
              <div className="product-list-content-title">티셔츠/셔츠</div>
              <div className="product-list-content-count">103 items</div>
            </div>
          </div>
          <div className="product-list-content-product">
            <img
              className="product-list-img"
              src={
                "https://s3.marpple.co/files/u_29089/2018/12/original/f_16708_1543905414628_SAl9i5M8Q7uA9f8wZzSEG.jpg"
              }
              alt="product-list-img"
            />
            <div className="product-list-content-text">
              <div className="product-list-content-title">맨투맨/후디/집업</div>
              <div className="product-list-content-count">53 items</div>
            </div>
          </div>
          <div className="product-list-content-product">
            <img
              className="product-list-img"
              src={
                "https://s3.marpple.co/files/u_412938/2018/12/original/f_16810_1543917596131_Z8xuVX3aHd5Un7QJ6TU0m.jpg"
              }
              alt="product-list-img"
            />
            <div className="product-list-content-text">
              <div className="product-list-content-title">아우터</div>
              <div className="product-list-content-count">42 items</div>
            </div>
          </div>
          <div className="product-list-content-product">
            <img
              className="product-list-img"
              src={
                "https://s3.marpple.co/files/u_29089/2018/12/original/f_16710_1543905422148_xmAgkwQXXeRr3ybi.jpg"
              }
              alt="product-list-img"
            />
            <div className="product-list-content-text">
              <div className="product-list-content-title">바지</div>
              <div className="product-list-content-count">11 items</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
