import React, { Component } from "react";
import "./ImageOption.scss";
export class ImageOption extends Component {
  state = {
    size: 50,
    opacity: 50
  };
  handleSize = event => {
    const { size } = this.state;
    this.setState({ size: event.target.value }, () => {
      this.props.handleSizeOption("width", Number(size) * 2 + 100);
    });
  };
  handleOpacity = event => {
    const { opacity } = this.state;
    this.setState({ opacity: event.target.value }, () => {
      this.props.handleOpacityOption("opacity", Number(opacity) / 100);
    });
  };
  render() {
    return (
      <div
        className="image-option"
        style={{ display: this.props.active ? "block" : "none" }}
      >
        <div className="img-option-selector">
          <div className="img-option-header">
            Image Customizing
            <div
              className="back-btn"
              onClick={() => this.props.handleMode("default")}
            >
              {"<"}
            </div>
          </div>
          <div className="img-option-body">
            <div className="img-option-item">
              <div className="img-option-title">크기</div>
              <div className="size-control">
                <input
                  className="size-range-bar"
                  type="range"
                  min="0"
                  max="100"
                  onChange={this.handleSize}
                />
                <div className="exact-size">{this.state.size}</div>
              </div>
            </div>
            <div className="img-option-item">
              <div className="img-option-title">투명도</div>
              <div className="opacity-control">
                <input
                  className="opacity-range-bar"
                  type="range"
                  min="0"
                  max="100"
                  onChange={this.handleOpacity}
                />
                <div className="exact-opacity">{this.state.opacity}</div>
              </div>
            </div>
            <div className="img-option-item">
              <div className="img-option-title">위치</div>
              <div className="option-control">
                <div className="control-item">
                  <div className="control-item-title">상하조절</div>
                  <div className="control-item-operator">
                    <div
                      onClick={() =>
                        this.props.handlerMoveDownOption("top", 20)
                      }
                    >
                      -
                    </div>
                    <div
                      onClick={() => this.props.handlerMoveTopOption("top", 20)}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="control-item">
                  <div className="control-item-title">좌우조절</div>
                  <div className="control-item-operator">
                    <div
                      onClick={() =>
                        this.props.handlerMoveLeftOption("left", 20)
                      }
                    >
                      {"<"}
                    </div>
                    <div
                      onClick={() =>
                        this.props.handlerMoveRightOption("left", 20)
                      }
                    >
                      {">"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="img-option-item">
              <div className="img-option-title">반전</div>
              <div className="option-control">
                <div
                  className="control-item"
                  onClick={this.props.handlerRotateXOption}
                >
                  <div className="control-item-text">상하반전</div>
                </div>
                <div
                  className="control-item"
                  onClick={this.props.handlerRotateYOption}
                >
                  <div className="control-item-text">좌우반전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-area">
          <div className="button-box" onClick={this.props.openAddCartModal}>
            <div className="button-text">장바구니 담기</div>
          </div>
        </div>
      </div>
    );
  }
}
export default ImageOption;
