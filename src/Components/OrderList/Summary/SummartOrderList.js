import React, { Component } from "react";
import "./SummaryOrderList.scss";

export default class SummartOrderList extends Component {
  render() {
    return (
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
              <div>{`${this.props.totalCount}개`}</div>
            </td>
            <td className="summary-price">
              <div>{`${this.props.price}원`}</div>
            </td>
            <td>
              <div className="plusIcon">+</div>
            </td>
            <td className="summary-delivery">
              <div>{this.props.deliveryCharge}</div>
            </td>
            <td>
              <div className="equalIcon">=</div>
            </td>
            <td className="summary-total">
              <div>{`${this.props.totalPrice}원`}</div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
