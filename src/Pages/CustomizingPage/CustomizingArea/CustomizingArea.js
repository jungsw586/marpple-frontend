import React, { Component } from "react";
import CustomMenu from "./CustomMenu";
import CustomMake from "./CustomMake";
import OptionSection from "./OptionSection";
import "./CustomizingArea.scss";

export class CustomizingArea extends Component {
  state = {
    width: 0,
    height: 0
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

  render() {
    const { data } = this.props;
    return (
      <div
        className="customizing-section"
        style={{ height: this.state.height }}
      >
        <div className="custom-area">
          <CustomMenu />
          <CustomMake data={data} />
        </div>
        <OptionSection data={data} />
      </div>
    );
  }
}

export default CustomizingArea;
