import React, { Component } from "react";
import {
  itemChange,
  imageUpload,
  myImage,
  text,
  itemFrontImg,
  itemBackImg
} from "config";
import "./CustomMake.scss";

export class CustomMake extends Component {
  state = {
    front: true
  };

  handleFront = trueOrFalse => {
    this.setState({
      front: trueOrFalse
    });
  };

  render() {
    const { front } = this.state;
    const { openItemChangeModal } = this.props;
    return (
      <div className="make">
        <div className="item">
          <div
            className="item-image"
            style={{
              backgroundImage: front
                ? `url(${itemFrontImg})`
                : `url(${itemBackImg})`
            }}
          ></div>
        </div>
        <div className="front-back">
          <div className="btn-container">
            <div
              className={front ? "btn front selected" : "btn front"}
              onClick={() => {
                this.handleFront(true);
              }}
            >
              앞면
            </div>
            <div
              className={!front ? "btn selected" : "btn"}
              onClick={() => {
                this.handleFront(false);
              }}
            >
              뒷면
            </div>
          </div>
        </div>
        <div className="customize-menu">
          <div className="customize-menu-selector">
            <div className="selector-container" onClick={openItemChangeModal}>
              <div
                className="selector-icon"
                style={{ backgroundImage: `url(${itemChange})` }}
              ></div>
              <div className="selector-name">상품변경</div>
            </div>
            <div className="selector-container">
              <div
                className="selector-icon"
                style={{ backgroundImage: `url(${imageUpload})` }}
              ></div>
              <div className="selector-name">이미지 업로드</div>
            </div>
            <div className="selector-container">
              <div
                className="selector-icon"
                style={{ backgroundImage: `url(${myImage})` }}
              ></div>
              <div className="selector-name">내이미지</div>
            </div>
            <div className="selector-container">
              <div
                className="selector-icon"
                style={{ backgroundImage: `url(${text})` }}
              ></div>
              <div className="selector-name">텍스트</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomMake;
