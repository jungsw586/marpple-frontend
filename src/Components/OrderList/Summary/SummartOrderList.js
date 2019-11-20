import React from "react";
import "./SummaryOrderList.scss";

export default function SummartOrderList(props) {
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
            <div>{`${props.totalCount}개`}</div>
          </td>
          <td className="summary-price">
            <div>{`${props.totalPrice}원`}</div>
          </td>
          <td>
            <div className="plusIcon">+</div>
          </td>
          <td className="summary-delivery">
            {props.totalPrice < 50000 ? <div>2500</div> : <div>0</div>}
          </td>
          <td>
            <div className="equalIcon">=</div>
          </td>
          <td className="summary-total">
            <div>{`${
              props.totalPrice < 50000
                ? props.totalPrice + 2500
                : props.totalPrice
            }원`}</div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
