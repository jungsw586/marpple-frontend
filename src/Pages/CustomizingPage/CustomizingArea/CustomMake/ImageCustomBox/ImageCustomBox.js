import React, { Component } from "react";
import "./ImageCustomBox.scss";
export class ImageCustomBox extends Component {
  render() {
    const { imageActive, imageOption, image } = this.props;
    return (
      <div
        className="custom-box"
        style={{ display: imageActive ? "block" : "none" }}
      >
        <img
          className="uploaded-image"
          // src={image}
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/logo/wecode_logo_bk.png"
          alt="custom"
          style={imageOption}
        />
      </div>
    );
  }
}
export default ImageCustomBox;
