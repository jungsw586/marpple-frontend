import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import OrderListTableContent from "../OrderList/OrderListTableContent";
import "./OrderList.scss";

class OrderList extends Component {
  render() {
    const currentRoute = this.props.match.path;
    const { dataCount } = this.props;
    return (
      <div className="orderlist-background">
        <div className="orderlist-body">
          <div className="orderlist-header">
            {currentRoute === "/cart_list" ? (
              <>
                <div className="orderlist-header-title">
                  <div className="title">My Cart</div>
                  <div className="count">{`(${dataCount})`}</div>
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
                  <div className="count">{`(${dataCount})`}</div>
                </div>
                <div></div>
              </>
            )}
          </div>
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
              {(() => {
                let _list = [];
                for (let i = 0; i < dataCount; i++) {
                  _list.push(
                    <OrderListTableContent
                      key={i}
                      currentRoute={currentRoute}
                    />
                  );
                }
                return _list;
              })()}
            </table>
            {currentRoute === "/cart_list" && (
              <div className="add-color">색상추가 +</div>
            )}
          </div>

          {currentRoute === "/cart_list" ? (
            <>
              <table className="orderlist-table-summary">
                <thead className="table-summary-header">
                  <tr>
                    <th className="summary-col1">총 수량</th>
                    <th className="summary-col2">가격</th>
                    <th></th>
                    <th className="summary-col3">배송비</th>
                    <th></th>
                    <th className="summary-col4">합계</th>
                  </tr>
                </thead>
                <tbody className="table-summary-body">
                  <tr>
                    <td className="summary-count">
                      <div>1개</div>
                    </td>
                    <td className="summary-price">
                      <div>16,400</div>
                    </td>
                    <td>
                      <div className="plusIcon">+</div>
                    </td>
                    <td className="summary-delivery">
                      <div>2,500</div>
                    </td>
                    <td>
                      <div className="equalIcon">=</div>
                    </td>
                    <td className="summary-total">
                      <div>18,900원</div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="summit">주문서 작성</div>
            </>
          ) : (
            <div className="summit">모두 장바구니로 이동</div>
          )}
        </div>
      </div>
    );
  }
}
export default withRouter(OrderList);
