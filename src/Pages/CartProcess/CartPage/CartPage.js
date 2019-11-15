import React, { Component } from "react";
import NavBar from "Components/NavBar";
import OrderList from "Components/OrderList";
import Footer from "Components/Footer";
import "./CartPage.scss";
import EmptyOrderList from "Components/EmptyOrderList";

export default class CartPage extends Component {
  state = {
    dataLengthOfCart: 2
  };
  render() {
    const { dataLengthOfCart } = this.state;
    return (
      <>
        <NavBar />
        {dataLengthOfCart === 0 ? (
          <EmptyOrderList />
        ) : (
          <OrderList dataCount={dataLengthOfCart} />
        )}
        <Footer />
      </>
    );
  }
}
