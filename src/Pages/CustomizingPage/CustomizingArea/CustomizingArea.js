import React, { Component } from "react";
import CustomMenu from "./CustomMenu";
import CustomMake from "./CustomMake";
import OptionSection from "./OptionSection";
import TextSection from "./TextOption";
import "./CustomizingArea.scss";
import FontColorDATA from "DATA/fontColor";

export class CustomizingArea extends Component {
  state = {
    fontColorData: FontColorDATA,
    width: 0,
    height: 0,
    mode: "default",
    textOption: {
      left: "0%",
      top: "35%",
      fontSize: "30px",
      textAlign: "center",
      transform: "rotateX(0deg)",
      color: "#000"
    },
    fontColor: "검정",
    bold: false,
    italic: false,
    activeTextDeco: null,
    textRotateX: false,
    textRotateY: false
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

  handlerTextMode = () => {
    //made by SW
    this.setState({ mode: "text" });
  };

  handlerDefaultMode = () => {
    //made by SW
    this.setState({ mode: "default" });
  };

  handlerTextOption = (option, value, fontColor) => {
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
    }
  };

  handlerRotateXOption = () => {
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

  handlerRotateYOption = () => {
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
            handlerTextMode={this.handlerTextMode}
            mode={this.state.mode}
            textOption={this.state.textOption}
            handleMode={mode => this.handleMode(mode)}
          />
        </div>
        {(() => {
          if (this.state.mode === "default") {
            return <OptionSection data={data} />;
          } else if (this.state.mode === "text") {
            return (
              <TextSection
                handleMode={mode => this.handleMode(mode)}
                activeX={this.state.textRotateX}
                activeY={this.state.textRotateY}
                fontColorData={this.state.fontColorData}
                fontColor={this.state.fontColor}
                fontColorCode={this.state.textOption.color}
                handlerTextOption={(option, value, fontColor) =>
                  this.handlerTextOption(option, value, fontColor)
                }
                handlerRotateXOption={this.handlerRotateXOption}
                handlerRotateYOption={this.handlerRotateYOption}
              />
            );
          }
          // --------준식님---------
          // else if (this.state.mode === "image"){
          //   return <ImageSection />
          // }
        })()}
      </div>
    );
  }
}

export default CustomizingArea;
