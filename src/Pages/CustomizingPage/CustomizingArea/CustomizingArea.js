import React, { Component } from "react";
import CustomMenu from "./CustomMenu";
import CustomMake from "./CustomMake";
import OptionSection from "./OptionSection";
import ImageOption from "./ImageOption";
import { AddProperty } from "config";
import TextOption from "./TextOption";
import AddCartModal from "Components/Modal/AddCartModal";
import ItemChangeModal from "Components/Modal/ItemChangeModal";
import "./CustomizingArea.scss";
import FontColorDATA from "DATA/fontColor";
import FontFmailyDATA from "DATA/fontFamily";

export class CustomizingArea extends Component {
  state = {
    fontColorData: FontColorDATA,
    fontFamilyData: FontFmailyDATA,
    width: 0,
    height: 0,
    mode: "image",
    imageOption: {
      width: 200,
      opacity: 0.5,
      top: 50,
      left: 5
    },
    rotateX: false,
    rotateY: false,
    textOption: {
      left: "0%",
      top: "35%",
      fontSize: "40px",
      textAlign: "center",
      transform: "rotateX(0deg)",
      fontFamily: "Kirang Haerang",
      color: "#000"
    },
    fontColor: "검정",
    bold: false,
    italic: false,
    activeTextDeco: null,
    textRotateX: false,
    textRotateY: false,
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

  handlerTextOption = (option, value, fontColor) => {
    console.log("value : ", value);
    if (option === "fontWeight") {
      this.state.bold ? (value = "normal") : (value = "bold");
      this.setState({
        textOption: {
          ...this.state.textOption,
          [option]: value
        },
        bold: !this.state.bold
      });
    } else if (option === "fontStyle") {
      this.state.italic ? (value = "normal") : (value = "italic");
      this.setState({
        textOption: {
          ...this.state.textOption,
          [option]: value
        },
        italic: !this.state.italic
      });
    } else if (option === "textDecoration" && value === "underline") {
      this.state.activeTextDeco === value
        ? (value = "none")
        : (value = "underline");
      this.setState({
        textOption: {
          ...this.state.textOption,
          [option]: value
        },
        activeTextDeco: value
      });
    } else if (option === "textDecoration" && value === "line-through") {
      this.state.activeTextDeco === value
        ? (value = "none")
        : (value = "line-through");
      this.setState({
        textOption: {
          ...this.state.textOption,
          [option]: value
        },
        activeTextDeco: value
      });
    } else if (fontColor !== undefined) {
      this.setState({
        textOption: {
          ...this.state.textOption,
          [option]: value
        },
        fontColor: fontColor
      });
    } else {
      this.setState({
        textOption: {
          ...this.state.textOption,
          [option]: value
        }
      });
    }
  };

  handlerTextRotateXOption = () => {
    let result = this.state.textRotateX ? 0 : 180;
    let newOption = (() => {
      if (!this.state.textRotateX && !this.state.textRotateY) {
        return `rotateX(${result}deg)`;
      } else if (this.state.textRotateX && this.state.textRotateY) {
        return `rotateY(${result + 180}deg)`;
      } else if (!this.state.textRotateX && this.state.textRotateY) {
        return `rotate(${result}deg)`;
      } else if (this.state.textRotateX && !this.state.textRotateY) {
        return `rotate(${result}deg)`;
      }
    })();
    this.setState({
      textOption: {
        ...this.state.textOption,
        transform: newOption
      },
      textRotateX: !this.state.textRotateX
    });
  };

  handlerTextRotateYOption = () => {
    let result = this.state.textRotateY ? 0 : 180;
    let newOption = (() => {
      if (!this.state.textRotateX && !this.state.textRotateY) {
        return `rotateY(${result}deg)`;
      } else if (this.state.textRotateX && this.state.textRotateY) {
        return `rotateX(${result + 180}deg)`;
      } else if (!this.state.textRotateX && this.state.textRotateY) {
        return `rotate(${result}deg)`;
      } else if (this.state.textRotateX && !this.state.textRotateY) {
        return `rotate(${result}deg)`;
      }
    })();
    this.setState({
      textOption: {
        ...this.state.textOption,
        transform: newOption
      },
      textRotateY: !this.state.textRotateY
    });
  };

  handleMode = mode => {
    this.setState({ mode });
  };

  //-----------------------------------------------------------------
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
  //-----------------------------------------------------------------
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
    const { mode, height, imageOption } = this.state;
    const { data } = this.props;
    return (
      <div className="customizing-section" style={{ height: height }}>
        <div className="custom-area">
          <CustomMenu />
          <CustomMake
            data={data}
            handlerTextMode={this.handlerTextMode}
            mode={this.state.mode}
            textOption={this.state.textOption}
            handleMode={mode => this.handleMode(mode)}
            openItemChangeModal={this.openItemChangeModal}
            imageActive={mode === "image"}
            imageOption={imageOption}
          />
        </div>
        {(() => {
          if (this.state.mode === "default") {
            return (
              <OptionSection
                data={data}
                openItemChangeModal={this.openItemChangeModal}
                openAddCartModal={this.openAddCartModal}
                active={mode === "default"}
              />
            );
          } else if (this.state.mode === "text") {
            return (
              <TextOption
                handleMode={mode => this.handleMode(mode)}
                activeX={this.state.textRotateX}
                activeY={this.state.textRotateY}
                fontFamily={this.state.textOption.fontFamily}
                fontFamilyData={this.state.fontFamilyData}
                fontColorData={this.state.fontColorData}
                fontColor={this.state.fontColor}
                fontColorCode={this.state.textOption.color}
                handlerTextOption={(option, value, fontColor) =>
                  this.handlerTextOption(option, value, fontColor)
                }
                handlerTextRotateXOption={this.handlerTextRotateXOption}
                handlerTextRotateYOption={this.handlerTextRotateYOption}
                openAddCartModal={this.openAddCartModal}
              />
            );
          } else if (this.state.mode === "image") {
            return (
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
                openAddCartModal={this.openAddCartModal}
              />
            );
          }
        })()}

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
