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
          src={image}
          alt="custom"
          style={imageOption}
        />
      </div>
    );
  }
}

export default ImageCustomBox;
