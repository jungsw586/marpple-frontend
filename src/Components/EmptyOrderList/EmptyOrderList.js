import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./EmptyOrderList.scss";

class EmptyOrderList extends Component {
  render() {
    const currentRoute = this.props.match.path;
    return (
      <div className="orderlist-background">
        <div className="orderlist-body">
          <div className="orderlist-header">
            {currentRoute === "/cart_list" ? (
              <>
                <div className="orderlist-header-title">
                  <div className="title">My Cart</div>
                  <div className="count">(0)</div>
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
                  <div className="count">(0)</div>
                </div>
                <div></div>
              </>
            )}
          </div>
          <div className="orderlist-empty-content">
            {currentRoute === "/cart_list" ? (
              <div className="orderlist-empty-img-box">
                <img
                  src={
                    "http://s3.marpple.co/files/u_18054/2018/10/original/f_6010_1539261673396_RJc1Jp1oD1xzyVrgQE.svg"
                  }
                  alt="empty-cart-img"
                />
                <div className="empty-text">장바구니가 비어있습니다.</div>
              </div>
            ) : (
              <div className="orderlist-empty-img-box">
                <img
                  src={
                    "http://s3.marpple.co/files/u_18054/2018/10/original/f_6009_1539261673396_JduEPV0Lpt9E7ieXUH.svg"
                  }
                  alt="empty-like-img"
                />
                <div className="empty-text">찜한 상품이 없습니다.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(EmptyOrderList);
