import React, { Component } from "react";
import NavBar from "Components/NavBar";
import OrderList from "Components/OrderList";
import Footer from "Components/Footer";
import EmptyOrderList from "Components/EmptyOrderList";

import "./LikePage.scss";

export default class LikePage extends Component {
  state = {
    dataLengthOfLike: 1
  };
  render() {
    const { dataLengthOfLike } = this.state;
    return (
      <>
        <NavBar />
        {dataLengthOfLike === 0 ? (
          <EmptyOrderList />
        ) : (
          <OrderList dataCount={dataLengthOfLike} />
        )}
        <Footer />
      </>
    );
  }
}
