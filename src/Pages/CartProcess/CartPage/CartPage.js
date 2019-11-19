import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "Components/NavBar";
import OrderList from "Components/OrderList";
import Footer from "Components/Footer";
import EmptyOrderList from "Components/EmptyOrderList";
import HeaderOrderList from "Components/OrderList/Header";
import SummaryOrderList from "Components/OrderList/Summary";
import SummitBtn from "Components/OrderList/SummitBtn";
import cartDATA from "DATA/cartDATA";
import "./CartPage.scss";

class CartPage extends Component {
  state = {
    mode: this.props.match.path,
    cartDATA: cartDATA
  };
  // componentDidMount = () => {
  //   fetch("http://localhost:3000/cartData.json")
  //     .then(res => res.json())
  //     .then(res => console.log(res));
  // };
  render() {
    const { mode, cartDATA } = this.state;
    return (
      <>
        <NavBar />
        {cartDATA.length === 0 ? (
          <EmptyOrderList />
        ) : (
          <div className="orderlist-background">
            <div className="orderlist-body">
              <HeaderOrderList mode={mode} dataCount={cartDATA.length} />
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
                  <OrderList
                    mode={mode}
                    dataCount={cartDATA.length}
                    data={cartDATA}
                  />
                </table>
              </div>
              {mode === "/list/cart" && <SummaryOrderList data={cartDATA} />}
              <SummitBtn mode={mode} />
            </div>
          </div>
        )}
        <Footer />
      </>
    );
  }
}
export default withRouter(CartPage);
