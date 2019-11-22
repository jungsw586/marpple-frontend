import React, { Component } from "react";
import "./ImageOption.scss";
export class ImageOption extends Component {
  state = {
    size: 50,
    opacity: 50
  };
  render() {
    const { size, opacity } = this.state;
    const {
      handleMode,
      handleSizeAndOpacityOption,
      handlerMoveDownOption,
      handlerMoveTopOption,
      handlerMoveLeftOption,
      handlerMoveRightOption,
      handlerRotateXOption,
      handlerRotateYOption,
      openAddCartModal
    } = this.props;
    return (
      <div
        className="image-option"
        // style={{ display: this.props.active ? "block" : "none" }}
      >
        <div className="img-option-selector">
          <div className="img-option-header">
            Image Customizing
            <div className="back-btn" onClick={() => handleMode("default")}>
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
                  onChange={e => {
                    handleSizeAndOpacityOption(
                      "width",
                      Number(e.target.value) * 2 + 100
                    );
                  }}
                />
                <div className="exact-size">{size}</div>
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
                  onChange={e => {
                    handleSizeAndOpacityOption(
                      "opacity",
                      Number(e.target.value) / 100
                    );
                  }}
                />
                <div className="exact-opacity">{opacity}</div>
              </div>
            </div>
            <div className="img-option-item">
              <div className="img-option-title">위치</div>
              <div className="option-control">
                <div className="control-item">
                  <div className="control-item-title">상하조절</div>
                  <div className="control-item-operator">
                    <div onClick={() => handlerMoveDownOption("top", 20)}>
                      -
                    </div>
                    <div onClick={() => handlerMoveTopOption("top", 20)}>+</div>
                  </div>
                </div>
                <div className="control-item">
                  <div className="control-item-title">좌우조절</div>
                  <div className="control-item-operator">
                    <div onClick={() => handlerMoveLeftOption("left", 20)}>
                      {"<"}
                    </div>
                    <div onClick={() => handlerMoveRightOption("left", 20)}>
                      {">"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="img-option-item">
              <div className="img-option-title">반전</div>
              <div className="option-control">
                <div className="control-item" onClick={handlerRotateXOption}>
                  <div className="control-item-text">상하반전</div>
                </div>
                <div className="control-item" onClick={handlerRotateYOption}>
                  <div className="control-item-text">좌우반전</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-area">
          <div className="button-box" onClick={openAddCartModal}>
            <div className="button-text">장바구니 담기</div>
          </div>
        </div>
      </div>
    );
  }
}
export default ImageOption;
