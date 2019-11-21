import React, { Component } from "react";
import CustomMenu from "./CustomMenu";
import CustomMake from "./CustomMake";
import OptionSection from "./OptionSection";
import AddCartModal from "Components/Modal/AddCartModal";
import ItemChangeModal from "Components/Modal/ItemChangeModal";
import "./CustomizingArea.scss";

export class CustomizingArea extends Component {
  state = {
    width: 0,
    height: 0,
    addCartModal: false,
    itemChangeModal: false
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = e => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight - 96
    });
  };

  openAddCartModal = () => {
    this.setState({ addCartModal: true });
  };

  closeAddCartModal = () => {
    this.setState({ addCartModal: false });
  };

  openItemChangeModal = () => {
    this.setState({ itemChangeModal: true });
  };

  closeItemChangeModal = () => {
    this.setState({ itemChangeModal: false });
  };

  render() {
    const { data } = this.props;
    return (
      <div
        className="customizing-section"
        style={{ height: this.state.height }}
      >
        <div className="custom-area">
          <CustomMenu />
          <CustomMake
            data={data}
            openItemChangeModal={this.openItemChangeModal}
          />
        </div>
        <OptionSection
          data={data}
          openItemChangeModal={this.openItemChangeModal}
          openAddCartModal={this.openAddCartModal}
        />
        <AddCartModal
          active={this.state.addCartModal}
          closeModal={this.closeAddCartModal}
        />
        <ItemChangeModal
          active={this.state.itemChangeModal}
          closeModal={this.closeItemChangeModal}
        />
      </div>
    );
  }
}

export default CustomizingArea;
