import React from "react";
import { withRouter } from "react-router-dom";
import OrderListTableContent from "../OrderList/OrderListTableContent";
import "./OrderList.scss";

function OrderList(props) {
  return (
    <tbody className="table-body">
      {(() => {
        let _list = [];
        for (let i = 0; i < props.dataCount; i++) {
          _list.push(<OrderListTableContent key={i} mode={props.mode} />);
        }
        return _list;
      })()}
      {props.mode === "/list/cart" && (
        <tr className="add-color">
          <td colSpan="4">색상추가 +</td>
        </tr>
      )}
    </tbody>
  );
}
export default withRouter(OrderList);
