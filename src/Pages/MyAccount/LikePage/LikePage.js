import React, { Component } from "react";
import NavBar from "Components/NavBar";
import OrderList from "Components/OrderList";
import Footer from "Components/Footer";
import EmptyOrderList from "Components/EmptyOrderList";
import HeaderOrderList from "Components/OrderList/Header";
import SummaryOrderList from "Components/OrderList/Summary";
import SummitBtn from "Components/OrderList/SummitBtn";
import "./LikePage.scss";

export default class LikePage extends Component {
  state = {
    mode: this.props.match.path,
    dataLengthOfLike: 1
  };
  render() {
    const { mode, dataLengthOfLike } = this.state;
    return (
      <>
        <NavBar />
        {dataLengthOfLike === 0 ? (
          <EmptyOrderList />
        ) : (
          <div className="orderlist-background">
            <div className="orderlist-body">
              <HeaderOrderList mode={mode} dataCount={dataLengthOfLike} />
              <div className="orderlist-top">
                <table className="orderlist-table">
                  <thead className="table-header">
                    <tr>
                      <th className="col1">상품정보</th>
                      <th className="col2">사이즈/수량</th>
                      <th className="col3">가격</th>
                      <th className="col4">편집</th>
                    </tr>
                  </thead>
                  <OrderList mode={mode} dataCount={dataLengthOfLike} />
                </table>
              </div>
              {mode === "/list/cart" && <SummaryOrderList />}
              <SummitBtn mode={mode} />
            </div>
          </div>
        )}
        <Footer />
      </>
    );
  }
}
