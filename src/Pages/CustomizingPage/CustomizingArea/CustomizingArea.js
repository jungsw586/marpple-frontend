import React, { Component } from "react";
import CustomMenu from "./CustomMenu";
import CustomMake from "./CustomMake";
import OptionSection from "./OptionSection";
import ImageOption from "./ImageOption";
import { AddProperty } from "config";
import "./CustomizingArea.scss";

export class CustomizingArea extends Component {
  state = {
    width: 0,
    height: 0,
    mode: "default",
    imageOption: {
      width: 200,
      opacity: 0.5,
      top: 50,
      left: 5
    },
    rotateX: false,
    rotateY: false
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

  //준식 - handleMode
  handleMode = mode => {
    this.setState({ mode });
  };

  //준식 - handleCustomize
  handlerMoveDownOption = (option, value) => {
    const { imageOption } = this.state;
    const currentTop = imageOption.top;
    const changedTop = currentTop + value;
    let newOption = AddProperty({ [option]: changedTop }, imageOption);
    this.setState({
      imageOption: newOption
    });
  };

  handlerMoveTopOption = (option, value) => {
    const { imageOption } = this.state;
    const currentTop = imageOption.top;
    const changedTop = currentTop - value;
    let newOption = AddProperty({ [option]: changedTop }, imageOption);
    this.setState({
      imageOption: newOption
    });
  };

  handlerMoveLeftOption = (option, value) => {
    const { imageOption } = this.state;
    const currentLeft = imageOption.left;
    const changedLeft = currentLeft - value;
    let newOption = AddProperty({ [option]: changedLeft }, imageOption);
    this.setState({
      imageOption: newOption
    });
  };

  handlerMoveRightOption = (option, value) => {
    const { imageOption } = this.state;
    const currentLeft = imageOption.left;
    const changedLeft = currentLeft + value;
    let newOption = AddProperty({ [option]: changedLeft }, imageOption);
    this.setState({
      imageOption: newOption
    });
  };

  handleSizeOption = (option, value) => {
    const { imageOption } = this.state;
    let newOption = AddProperty({ [option]: value }, imageOption);
    this.setState({
      imageOption: newOption
    });
  };

  handleOpacityOption = (option, value) => {
    const { imageOption } = this.state;
    let newOption = AddProperty({ [option]: value }, imageOption);
    this.setState({
      imageOption: newOption
    });
  };

  handlerRotateXOption = () => {
    const { imageOption, rotateX, rotateY } = this.state;
    let result = rotateX ? 0 : 180;
    let newOption = (() => {
      if (!rotateX && !rotateY) {
        return AddProperty({ transform: `rotateX(${result}deg)` }, imageOption);
      } else if (rotateX && rotateY) {
        return AddProperty(
          { transform: `rotateY(${result + 180}deg)` },
          imageOption
        );
      } else if (!rotateX && rotateY) {
        return AddProperty({ transform: `rotate(${result}deg)` }, imageOption);
      } else if (rotateX && !rotateY) {
        return AddProperty({ transform: `rotate(${result}deg)` }, imageOption);
      }
    })();
    this.setState({
      imageOption: newOption,
      rotateX: !rotateX
    });
  };

  handlerRotateYOption = () => {
    const { imageOption, rotateX, rotateY } = this.state;
    let result = rotateY ? 0 : 180;
    let newOption = (() => {
      if (!rotateX && !rotateY) {
        return AddProperty({ transform: `rotateY(${result}deg)` }, imageOption);
      } else if (rotateX && rotateY) {
        return AddProperty(
          { transform: `rotateX(${result + 180}deg)` },
          imageOption
        );
      } else if (!rotateX && rotateY) {
        return AddProperty({ transform: `rotate(${result}deg)` }, imageOption);
      } else if (rotateX && !rotateY) {
        return AddProperty({ transform: `rotate(${result}deg)` }, imageOption);
      }
    })();
    this.setState({
      imageOption: newOption,
      rotateY: !rotateY
    });
  };

  render() {
    const { mode, height, imageOption } = this.state;
    const { data } = this.props;
    return (
      <div className="customizing-section" style={{ height: height }}>
        <div className="custom-area">
          <CustomMenu />
          <CustomMake
            data={data}
            handleMode={mode => this.handleMode(mode)}
            imageActive={mode === "image"}
            imageOption={imageOption}
          />
        </div>
        <OptionSection data={data} active={mode === "default"} />
        <ImageOption
          active={mode === "image"}
          handleMode={mode => this.handleMode(mode)}
          handlerMoveDownOption={(option, value) =>
            this.handlerMoveDownOption(option, value)
          }
          handlerMoveTopOption={(option, value) =>
            this.handlerMoveTopOption(option, value)
          }
          handlerMoveLeftOption={(option, value) =>
            this.handlerMoveLeftOption(option, value)
          }
          handlerMoveRightOption={(option, value) =>
            this.handlerMoveRightOption(option, value)
          }
          handleSizeOption={(option, value) =>
            this.handleSizeOption(option, value)
          }
          handleOpacityOption={(option, value) =>
            this.handleOpacityOption(option, value)
          }
          handlerRotateXOption={this.handlerRotateXOption}
          handlerRotateYOption={this.handlerRotateYOption}
        />
      </div>
    );
  }
}

export default CustomizingArea;
