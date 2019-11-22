import React, { Component } from "react";
import CustomMenu from "./CustomMenu";
import CustomMake from "./CustomMake";
import OptionSection from "./OptionSection";
import ImageOption from "./ImageOption";
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
      left: 0,
      top: 70,
      fontSize: 40,
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

  handleMode = mode => {
    this.setState({ mode });
  };

  //-------------------------TEXT OPTION-----------------------------
  handlerTextOption = (option, value, fontColor) => {
    const { textOption, bold, italic, activeTextDeco } = this.state;
    if (option === "fontWeight") {
      bold ? (value = "normal") : (value = "bold");
      this.setState({
        textOption: {
          ...textOption,
          [option]: value
        },
        bold: !bold
      });
    } else if (option === "fontStyle") {
      italic ? (value = "normal") : (value = "italic");
      this.setState({
        textOption: {
          ...textOption,
          [option]: value
        },
        italic: !italic
      });
    } else if (option === "textDecoration" && value === "underline") {
      activeTextDeco === value ? (value = "none") : (value = "underline");
      this.setState({
        textOption: {
          ...textOption,
          [option]: value
        },
        activeTextDeco: value
      });
    } else if (option === "textDecoration" && value === "line-through") {
      activeTextDeco === value ? (value = "none") : (value = "line-through");
      this.setState({
        textOption: {
          ...textOption,
          [option]: value
        },
        activeTextDeco: value
      });
    } else if (fontColor !== undefined) {
      this.setState({
        textOption: {
          ...textOption,
          [option]: value
        },
        fontColor: fontColor
      });
    } else {
      this.setState({
        textOption: {
          ...textOption,
          [option]: value
        }
      });
    }
  };

  handlerTextRotateXOption = () => {
    const { textOption, textRotateX, textRotateY } = this.state;
    let result = this.state.textRotateX ? 0 : 180;
    let newOption = (() => {
      if (!textRotateX && !textRotateY) {
        return `rotateX(${result}deg)`;
      } else if (textRotateX && textRotateY) {
        return `rotateY(${result + 180}deg)`;
      } else if (!textRotateX && textRotateY) {
        return `rotate(${result}deg)`;
      } else if (textRotateX && !textRotateY) {
        return `rotate(${result}deg)`;
      }
    })();
    this.setState({
      textOption: {
        ...textOption,
        transform: newOption
      },
      textRotateX: !textRotateX
    });
  };

  handlerTextRotateYOption = () => {
    const { textOption, textRotateX, textRotateY } = this.state;
    let result = textRotateY ? 0 : 180;
    let newOption = (() => {
      if (!textRotateX && !textRotateY) {
        return `rotateY(${result}deg)`;
      } else if (textRotateX && textRotateY) {
        return `rotateX(${result + 180}deg)`;
      } else if (!textRotateX && textRotateY) {
        return `rotate(${result}deg)`;
      } else if (textRotateX && !textRotateY) {
        return `rotate(${result}deg)`;
      }
    })();
    this.setState({
      textOption: {
        ...textOption,
        transform: newOption
      },
      textRotateY: !textRotateY
    });
  };

  handlerTextMoveDownOption = (option, value) => {
    const { textOption } = this.state;
    const currentTop = textOption.top;
    const changedTop = currentTop + value;
    this.setState({
      textOption: {
        ...textOption,
        [option]: changedTop
      }
    });
  };
  handlerTextMoveTopOption = (option, value) => {
    const { textOption } = this.state;
    const currentTop = textOption.top;
    const changedTop = currentTop - value;
    this.setState({
      textOption: {
        ...textOption,
        [option]: changedTop
      }
    });
  };
  handlerTextMoveLeftOption = (option, value) => {
    const { textOption } = this.state;
    const currentLeft = textOption.left;
    const changedLeft = currentLeft - value;
    this.setState({
      textOption: {
        ...textOption,
        [option]: changedLeft
      }
    });
  };
  handlerTextMoveRightOption = (option, value) => {
    const { textOption } = this.state;
    const currentLeft = textOption.left;
    const changedLeft = currentLeft + value;
    this.setState({
      textOption: {
        ...textOption,
        [option]: changedLeft
      }
    });
  };
  handlerTextSizeUpOption = (option, value) => {
    const { textOption } = this.state;
    const currentSize = textOption.fontSize;
    const changedSize = currentSize + value;
    this.setState({
      textOption: {
        ...textOption,
        [option]: changedSize
      }
    });
  };
  handlerTextSizeDownOption = (option, value) => {
    const { textOption } = this.state;
    const currentSize = textOption.fontSize;
    const changedSize = currentSize - value;
    this.setState({
      textOption: {
        ...textOption,
        [option]: changedSize
      }
    });
  };
  //-------------------------IMAGE OPTION------------------------------
  handlerMoveDownOption = (option, value) => {
    const { imageOption } = this.state;
    const currentTop = imageOption.top;
    const changedTop = currentTop + value;
    this.setState({
      imageOption: {
        ...imageOption,
        [option]: changedTop
      }
    });
  };
  handlerMoveTopOption = (option, value) => {
    const { imageOption } = this.state;
    const currentTop = imageOption.top;
    const changedTop = currentTop - value;
    this.setState({
      imageOption: {
        ...imageOption,
        [option]: changedTop
      }
    });
  };
  handlerMoveLeftOption = (option, value) => {
    const { imageOption } = this.state;
    const currentLeft = imageOption.left;
    const changedLeft = currentLeft - value;
    this.setState({
      imageOption: {
        ...imageOption,
        [option]: changedLeft
      }
    });
  };
  handlerMoveRightOption = (option, value) => {
    const { imageOption } = this.state;
    const currentLeft = imageOption.left;
    const changedLeft = currentLeft + value;
    this.setState({
      imageOption: {
        ...imageOption,
        [option]: changedLeft
      }
    });
  };
  handleSizeAndOpacityOption = (option, value) => {
    const { imageOption } = this.state;
    this.setState({
      imageOption: {
        ...imageOption,
        [option]: value
      }
    });
  };
  handlerRotateXOption = () => {
    const { imageOption, rotateX, rotateY } = this.state;
    let result = rotateX ? 0 : 180;
    let newOption = (() => {
      if (!rotateX && !rotateY) {
        return `rotateX(${result}deg)`;
      } else if (rotateX && rotateY) {
        return `rotateY(${result + 180}deg)`;
      } else if (!rotateX && rotateY) {
        return `rotate(${result}deg)`;
      } else if (rotateX && !rotateY) {
        return `rotate(${result}deg)`;
      }
    })();
    this.setState({
      imageOption: {
        ...imageOption,
        transform: newOption
      },
      rotateX: !rotateX
    });
  };
  handlerRotateYOption = () => {
    const { imageOption, rotateX, rotateY } = this.state;
    let result = rotateY ? 0 : 180;
    let newOption = (() => {
      if (!rotateX && !rotateY) {
        return `rotateY(${result}deg)`;
      } else if (rotateX && rotateY) {
        return `rotateX(${result + 180}deg)`;
      } else if (!rotateX && rotateY) {
        return `rotate(${result}deg)`;
      } else if (rotateX && !rotateY) {
        return `rotate(${result}deg)`;
      }
    })();
    this.setState({
      imageOption: {
        ...imageOption,
        transform: newOption
      },
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
    const {
      fontColorData,
      fontFamilyData,
      height,
      mode,
      imageOption,
      textOption,
      fontColor,
      textRotateX,
      textRotateY,
      addCartModal,
      itemChangeModal
    } = this.state;
    const { data } = this.props;
    return (
      <div className="customizing-section" style={{ height: height }}>
        <div className="custom-area">
          <CustomMenu />
          <CustomMake
            data={data}
            handlerTextMode={this.handlerTextMode}
            mode={mode}
            textOption={textOption}
            handleMode={mode => this.handleMode(mode)}
            openItemChangeModal={this.openItemChangeModal}
            imageActive={mode === "image"}
            imageOption={imageOption}
          />
        </div>
        {(() => {
          if (mode === "default") {
            return (
              <OptionSection
                data={data}
                openItemChangeModal={this.openItemChangeModal}
                openAddCartModal={this.openAddCartModal}
                //active={mode === "default"}
              />
            );
          } else if (mode === "text") {
            return (
              <TextOption
                handleMode={mode => this.handleMode(mode)}
                activeX={textRotateX}
                activeY={textRotateY}
                fontSize={textOption.fontSize}
                fontFamily={textOption.fontFamily}
                fontFamilyData={fontFamilyData}
                fontColorData={fontColorData}
                fontColor={fontColor}
                fontColorCode={textOption.color}
                handlerTextOption={(option, value, fontColor) =>
                  this.handlerTextOption(option, value, fontColor)
                }
                handlerTextRotateXOption={this.handlerTextRotateXOption}
                handlerTextRotateYOption={this.handlerTextRotateYOption}
                handlerTextMoveDownOption={(option, value) =>
                  this.handlerTextMoveDownOption(option, value)
                }
                handlerTextMoveTopOption={(option, value) =>
                  this.handlerTextMoveTopOption(option, value)
                }
                handlerTextMoveLeftOption={(option, value) =>
                  this.handlerTextMoveLeftOption(option, value)
                }
                handlerTextMoveRightOption={(option, value) =>
                  this.handlerTextMoveRightOption(option, value)
                }
                handlerTextSizeUpOption={(option, value) =>
                  this.handlerTextSizeUpOption(option, value)
                }
                handlerTextSizeDownOption={(option, value) =>
                  this.handlerTextSizeDownOption(option, value)
                }
                openAddCartModal={this.openAddCartModal}
              />
            );
          } else if (mode === "image") {
            return (
              <ImageOption
                //active={mode === "image"}
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
                handleSizeAndOpacityOption={(option, value) =>
                  this.handleSizeAndOpacityOption(option, value)
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
          active={addCartModal}
          closeModal={this.closeAddCartModal}
        />
        <ItemChangeModal
          active={itemChangeModal}
          closeModal={this.closeItemChangeModal}
        />
      </div>
    );
  }
}

export default CustomizingArea;
