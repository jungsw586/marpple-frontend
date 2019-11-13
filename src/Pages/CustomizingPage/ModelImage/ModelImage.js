import React, { Component } from "react";
import "./ModelImage.scss";

export class ModelImage extends Component {
  state = {
    num: 0,
    translateX: 0
  };

  handleLeft = () => {
    this.setState({
      num: this.state.num === 0 ? 0 : this.state.num - 1,
      translateX: this.state.num === 0 ? 0 : this.state.translateX + 488
    });
  };

  handleRight = () => {
    const img_num = this.props.data.model_image.length;
    this.setState({
      num: this.state.num === img_num - 3 ? this.state.num : this.state.num + 1,
      translateX:
        this.state.num === img_num - 3
          ? this.state.translateX
          : this.state.translateX - 488
    });
  };

  render() {
    const { data } = this.props;
    const model_img_list = data.model_image.map(imgUrl => {
      return (
        <div
          className="image-item"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
      );
    });

    const thumbnail_img_list = data.thumbnail_image.map(imgUrl => {
      return (
        <div
          className="thumbnail-image-item"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
      );
    });

    return (
      <div className="model-image-area">
        <div className="main-image">
          <div onClick={this.handleLeft} className="left arrow">
            {"<"}
          </div>
          <div onClick={this.handleRight} className="right arrow">
            {">"}
          </div>
          <div
            className="main-image-item-container"
            style={{
              transform: `translateX(${this.state.translateX}px)`,
              transitionProperty: "transform",
              transitionDuration: ".2s",
              transitionTimingFunction: "linear"
            }}
          >
            {model_img_list}
          </div>
          <div className="thumbnail-image">
            <div className="thumbnail-image-item-container">
              {thumbnail_img_list}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModelImage;
