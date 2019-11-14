import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductList.scss";

export default class ProductList extends Component {
  render() {
    return (
      <div className="homepage-product-list-body">
        <div className="homepage-product-list-header">
          <Link className="product-list-title" to={"/"}>
            Clothes Custom
          </Link>
          <Link className="product-list-goDetail" to={"/"}>
            Show All
          </Link>
        </div>
        <div className="product-list-content">
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
                "https://s3.marpple.co/files/u_29089/2018/12/original/f_16708_1543905414628_SAl9i5M8Q7uA9f8wZzSEG.jpg"
              }
              alt="product-list-img"
            />
            <div className="product-list-content-text">
              <div className="product-list-content-title">맨투맨/후디/집업</div>
              <div className="product-list-content-count">53 items</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
