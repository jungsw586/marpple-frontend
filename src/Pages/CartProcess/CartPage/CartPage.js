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
  getTotalCount = data => {
    let productCount = data.map(el =>
      el.product.map(el =>
        Object.values(el.size_info[0]).reduce((acc, curr) => acc + curr)
      )
    );
    let totalProductCount = productCount.map(el =>
      el.reduce((acc, curr) => acc + curr)
    );
    return totalProductCount.reduce((acc, curr) => acc + curr);
  };
  getTotalPrice = data => {
    let totalPrice = data.map(el => {
      return (
        el.price *
        el.product
          .map(el =>
            Object.values(el.size_info[0]).reduce((acc, curr) => acc + curr)
          )
          .reduce((acc, curr) => acc + curr)
      );
    });
    return totalPrice;
  };
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
              <HeaderOrderList
                mode={mode}
                productCount={this.getTotalCount(cartDATA)}
              />
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
                  {cartDATA.map((el, id) => {
                    return (
                      <OrderList
                        key={id}
                        mode={mode}
                        productLength={el.product.length}
                        name={el.name}
                        data={el.product}
                        price={el.price}
                      />
                    );
                  })}
                </table>
              </div>
              {mode === "/list/cart" && (
                <SummaryOrderList
                  totalCount={this.getTotalCount(cartDATA)}
                  totalPrice={this.getTotalPrice(cartDATA)}
                />
              )}
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
