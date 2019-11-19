import React, { Component } from "react";
import "./SummaryOrderList.scss";

export default class SummartOrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: null,
      Price: null,
      deliveryCharge: 2500,
      totalPrice: null
    };
  }
  getTotalCount = () => {
    let _counts = [];
    this.props.data.forEach(el => _counts.push(el.count));
    this.setState({ totalCount: _counts.reduce((acc, curr) => acc + curr) });
  };
  getPrice = () => {
    let _Price = [];
    this.props.data.forEach(el => _Price.push(el.count * el.price));
    _Price.reduce((acc, curr) => acc + curr) >= 50000
      ? this.setState({
          Price: _Price.reduce((acc, curr) => acc + curr),
          deliveryCharge: 0
        })
      : this.setState({ Price: _Price.reduce((acc, curr) => acc + curr) });
  };
  componentDidMount = () => {
    this.getTotalCount();
    this.getPrice();
  };
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
              <div>{`${this.state.totalCount}개`}</div>
            </td>
            <td className="summary-price">
              <div>{`${this.state.Price}원`}</div>
            </td>
            <td>
              <div className="plusIcon">+</div>
            </td>
            <td className="summary-delivery">
              <div>{this.state.deliveryCharge}</div>
            </td>
            <td>
              <div className="equalIcon">=</div>
            </td>
            <td className="summary-total">
              <div>{`${this.state.Price + this.state.deliveryCharge}원`}</div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
