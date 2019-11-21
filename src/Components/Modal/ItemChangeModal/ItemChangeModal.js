import React, { Component } from "react";
import "./ItemChangeModal.scss";
import MenuMain from "Pages/MenuPage/MenuMain";

export class ItemChangeModal extends Component {
  render() {
    const { active, closeModal } = this.props;
    return (
      <div className={active ? "item-change-modal" : "none"}>
        <div className="modal-overlay" onClick={closeModal} />
        <div className="add-cart-modal">
          <MenuMain className="contents" />
        </div>
      </div>
    );
  }
}

export default ItemChangeModal;
