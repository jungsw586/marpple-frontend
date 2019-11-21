import React, { Component } from "react";
import "./TextOption.scss";

export default class TextOption extends Component {
  state = {
    SpreadFontOption: false
  };
  handlerSpreadFontOption = () => {
    this.setState({
      SpreadFontOption: !this.state.SpreadFontOption
    });
  };
  render() {
    return (
      <div className="text-section">
        <div className="text-selector-area">
          <div className="text-selector-title-area">
            <img
              className="back-Btn"
              src={
                "http://s3.marpple.co/files/u_14355/2018/11/original/f_12438_1541409323249_q9vQ8BNlU4U9lrAq6ER5V.png"
              }
              alt={"back-Btn"}
              onClick={() => this.props.handleMode("default")}
            />
            <div className="title">폰트 스타일</div>
          </div>
          <div className="text-style-selector-area">
            <div className="text-style-selector-title">서체 선택</div>
            <div className="font-style-selectorBox">
              <div
                className="selected-option-box"
                onClick={this.handlerSpreadFontOption}
              >
                <div
                  className="selected-option-value"
                  style={{ fontFamily: this.props.fontFamily }}
                >
                  {this.props.fontFamily}
                </div>
                <img
                  className={`spread ${this.state.SpreadFontOption && "down"}`}
                  src={
                    "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-up-b-512.png"
                  }
                  alt="spread-img"
                />
              </div>
              {this.state.SpreadFontOption && (
                <div className="select-option-box">
                  {this.props.fontFamilyData.map((el, id) => (
                    <div
                      className="option"
                      key={id}
                      style={{ fontFamily: el.fontFamily }}
                      onClick={() =>
                        this.props.handlerTextOption(
                          "fontFamily",
                          el.fontFamily
                        )
                      }
                    >
                      {el.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="font-style-sortBox">
              <div className="font-deco">
                <div
                  className="bar bold"
                  onClick={() => {
                    this.props.handlerTextOption("fontWeight", "bold");
                  }}
                >
                  B
                </div>
                <div
                  className="bar italic"
                  onClick={() => {
                    this.props.handlerTextOption("fontStyle", "italic");
                  }}
                >
                  I
                </div>
                <div
                  className="bar underline"
                  onClick={() => {
                    this.props.handlerTextOption("textDecoration", "underline");
                  }}
                >
                  U
                </div>
                <div
                  className="middleline"
                  onClick={() => {
                    this.props.handlerTextOption(
                      "textDecoration",
                      "line-through"
                    );
                  }}
                >
                  S
                </div>
              </div>
              <div className="font-sort">
                <img
                  className="bar"
                  src={
                    "http://s3.marpple.co/files/u_18052/2018/10/original/f_6017_1539320766618_i2u1J4cg9EZT3CeU7syRL.png"
                  }
                  alt={"left"}
                  onClick={() => {
                    this.props.handlerTextOption("textAlign", "left");
                  }}
                />
                <img
                  className="bar"
                  src={
                    "http://s3.marpple.co/files/u_18052/2018/10/original/f_6016_1539320766618_VM2KBiuUkz6lz7TI1wM.png"
                  }
                  alt={"center"}
                  onClick={() => {
                    this.props.handlerTextOption("textAlign", "center");
                  }}
                />
                <img
                  src={
                    "http://s3.marpple.co/files/u_18052/2018/10/original/f_6022_1539320766618_rb4ZTQfR0JyDt2r4iXa.png"
                  }
                  alt={"right"}
                  onClick={() => {
                    this.props.handlerTextOption("textAlign", "right");
                  }}
                />
              </div>
            </div>
          </div>
          <div className="text-color-selector-area">
            <div className="text-color-selector-title">
              <div className="text-color-title">글씨 색상</div>
              <div
                className="selected-color"
                style={{ color: this.props.fontColorCode }}
              >{`- ${this.props.fontColor}`}</div>
            </div>
            <div className="text-color-list">
              {this.props.fontColorData.map((el, id) => {
                return (
                  <div
                    key={id}
                    style={{ backgroundColor: el.colorCode }}
                    onClick={() => {
                      this.props.handlerTextOption(
                        "color",
                        el.colorCode,
                        el.name
                      );
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="text-locate-control-area">
            <div className="text-rotate-X">
              <div className="text-rotate-X-title">상하 반전</div>
              <div
                className="rotateX-value"
                onClick={this.props.handlerTextRotateXOption}
              >
                <div className={this.props.activeX && `active`}>ON</div>
                <div className={!this.props.activeX && `active`}>OFF</div>
              </div>
            </div>
            <div
              className="text-rotate-Y"
              onClick={this.props.handlerTextRotateYOption}
            >
              <div className="text-rotate-Y-title">좌우 반전</div>
              <div className="rotateY-value">
                <div className={this.props.activeY && `active`}>ON</div>
                <div className={!this.props.activeY && `active`}>OFF</div>
              </div>
            </div>
            <div className="text-size">
              <div className="text-size-title">폰트 크기</div>
              <div className="text-size-value">
                <div className="up-down">
                  <img
                    className="up"
                    src={
                      "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-up-b-512.png"
                    }
                    alt="up"
                  />
                  <div className="value">1</div>
                  <img
                    className="down"
                    src={
                      "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-up-b-512.png"
                    }
                    alt="down"
                  />
                </div>
              </div>
            </div>
            <div className="text-location">
              <div className="text-location-title">텍스트 이동</div>
              <div className="text-location-arrow-box">
                <div className="left">
                  <img
                    src={
                      "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-up-b-512.png"
                    }
                    alt="left"
                  />
                </div>
                <div className="up-down">
                  <img
                    className="up"
                    src={
                      "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-up-b-512.png"
                    }
                    alt="up"
                  />
                  <img
                    className="down"
                    src={
                      "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-up-b-512.png"
                    }
                    alt="down"
                  />
                </div>
                <div className="right">
                  <img
                    src={
                      "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-up-b-512.png"
                    }
                    alt="right"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-area" onClick={this.props.openAddCartModal}>
          <div className="button-box">
            <div className="button-text">장바구니 담기</div>
          </div>
        </div>
      </div>
    );
  }
}
