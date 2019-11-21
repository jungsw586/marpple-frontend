import React, { Component } from "react";
import "./AddCartModal.scss";

export class AddCartModal extends Component {
  state = {
    num: 1,
    price: 20000
  };

  handlePlus = () => {
    this.setState({
      num: this.state.num + 1
    });
  };

  handleMinus = () => {
    this.setState({
      num: this.state.num === 1 ? 1 : this.state.num - 1
    });
  };

  render() {
    const { num, price } = this.state;
    const { closeModal, active } = this.props;
    return (
      <div className={active ? "AddCartModal" : "none"}>
        <div className="modal-overlay" onClick={closeModal} />
        <div className="add-cart-modal">
          <div className="item-preview">
            <div className="item-container">
              <div className="item-preview-image">item-image</div>
              <div className="item-preview-list">preview</div>
            </div>
          </div>
          <div className="option-select">
            <div className="close-btn" onClick={closeModal}></div>
            <div className="pick-num">수량을 선택해주세요.</div>
            <div className="item-title">루즈핏 베이직 맨투맨 [블랙]</div>
            <div className="option-info">
              <div className="size-count-wrap">
                <div className="size">FREE(44-46)</div>
                <div className="count">
                  <div className="minus" onClick={this.handleMinus}>
                    -
                  </div>
                  <div className="count-num">{num}</div>
                  <div className="plus" onClick={this.handlePlus}>
                    +
                  </div>
                </div>
              </div>
              <div className="price-wrap">
                <div className="price">{(price * num).toLocaleString()}</div>
              </div>
              <div className="summary-container">
                <div className="summary">
                  <div className="total-sum">총 수량 : {num}</div>
                  <div className="total-price">
                    {(price * num).toLocaleString()} 원
                  </div>
                </div>
                <div className="btn-container">
                  <div className="buy">바로구매</div>
                  <div className="add-cart">장바구니</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCartModal;
