import React from "react";
import "./OrderListHeader.scss";

export default function OrderListHeader(props) {
  return (
    <div className="orderlist-header">
      {props.mode === "/list/cart" ? (
        <>
          <div className="orderlist-header-title">
            <div className="title">My Cart</div>
            <div className="count">{`(${props.productCount})`}</div>
          </div>
          <div className="cart-process">
            <div className="nextArrow">장바구니</div>
            <div className="nextArrow">주문서작성</div>
            <div>주문완료</div>
          </div>
        </>
      ) : (
        <>
          <div className="orderlist-header-title">
            <div className="title">Like Item</div>
            <div className="count">{`(${props.productCount})`}</div>
          </div>
          <div></div>
        </>
      )}
    </div>
  );
}
