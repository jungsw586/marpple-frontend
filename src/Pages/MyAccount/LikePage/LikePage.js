import React, { Component } from "react";
import NavBar from "Components/NavBar";
import OrderList from "Components/OrderList";
import Footer from "Components/Footer";
import EmptyOrderList from "Components/EmptyOrderList";
import HeaderOrderList from "Components/OrderList/Header";
import SummitBtn from "Components/OrderList/SummitBtn";
import likeDATA from "DATA/likeDATA";
import "./LikePage.scss";

export default class LikePage extends Component {
  state = {
    mode: this.props.match.path,
    likeDATA: likeDATA
  };
  // componentDidMount = () => {
  //   fetch("http://localhost:3000/likeDATA.json")
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
  render() {
    const { mode, likeDATA } = this.state;
    return (
      <>
        <NavBar />
        {likeDATA.length === 0 ? (
          <EmptyOrderList />
        ) : (
          <div className="orderlist-background">
            <div className="orderlist-body">
              <HeaderOrderList
                mode={mode}
                productCount={this.getTotalCount(likeDATA)}
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
                  {likeDATA.map((el, id) => {
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
              <SummitBtn mode={mode} />
            </div>
          </div>
        )}
        <Footer />
      </>
    );
  }
}
