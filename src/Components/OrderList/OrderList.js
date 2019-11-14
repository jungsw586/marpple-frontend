import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./OrderList.scss";

class OrderList extends Component {
  render() {
    return (
      <div className="orderlist-background">
        <div className="orderlist-body">
          <div className="orderlist-header">
            <div className="orderlist-header-title">
              {this.props.match.path === "/cart_list" ? (
                <div className="title">My Cart</div>
              ) : (
                <div className="title">Like Item</div>
              )}
              <div className="count">{`(0)`}</div>
            </div>
            {this.props.match.path === "/cart_list" ? (
              <div className="cart-process">
                <div className="nextArrow">장바구니</div>
                <div className="nextArrow">주문서작성</div>
                <div>주문완료</div>
              </div>
            ) : (
              <div></div>
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
              <tbody className="table-body">
                <tr>
                  <td>
                    <div className="product-info">
                      <img
                        className="product-info-img"
                        src={
                          "https://s3.marpple.co/files/u_1085120/2019/9/150/f_787427_1567581236777_KLX5GtLma0QZ8M4Sd6ih.png?canvas=v2"
                        }
                        alt="product-img"
                      />
                      <div className="product-info-desc">
                        특양면 베이직 후드(남녀공용) [멜란지]
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="size-count-info">
                      <div className="size">L(95)</div>
                      <div className="count">
                        <input />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="price-info">16,400원</div>
                  </td>
                  <td>
                    {this.props.match.path === "/cart_list" ? (
                      <div className="edit-info">
                        <div className="edit-count">수량 변경</div>
                        <div className="edit-send-likelist">나중에 구매</div>
                        <div className="edit-delete">삭제</div>
                      </div>
                    ) : (
                      <div className="edit-info">
                        <div className="edit-send-cartlist">장바구니 담기</div>
                        <div className="edit-delete">삭제</div>
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            {this.props.match.path === "/cart_list" && (
              <div className="add-color">색상추가 +</div>
            )}
          </div>

          {this.props.match.path === "/cart_list" ? (
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
