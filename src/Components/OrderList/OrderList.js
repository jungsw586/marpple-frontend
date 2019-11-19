import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import OrderListTableContent from "../OrderList/OrderListTableContent";
import "./OrderList.scss";

class OrderList extends Component {
  getProductPrice = product => {
    let perPrice = this.props.price;
    let productCount = Object.values(product.size_info[0]).reduce(
      (acc, curr) => acc + curr
    );
    return perPrice * productCount;
  };
  render() {
    const { mode, data, name } = this.props;
    return (
      <tbody className="table-body">
        {data.map((el, id) => {
          return (
            <OrderListTableContent
              key={id}
              mode={mode}
              color={el.color}
              image={el.image}
              name={name}
              size_info={el.size_info[0]}
              price={this.getProductPrice(el)}
            />
          );
        })}
        {mode === "/list/cart" ? (
          <tr className="add-color">
            <td colSpan="4">색상추가 +</td>
          </tr>
        ) : (
          <tr className="empty">
            <td colSpan="4"></td>
          </tr>
        )}
      </tbody>
    );
  }
}
export default withRouter(OrderList);
