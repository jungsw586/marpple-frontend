import React, { Component } from "react";
import axios from "axios";
import {
  itemChange,
  imageUpload,
  myImage,
  text,
  itemFrontImg,
  itemBackImg
} from "config";
import ImageCustomBox from "./ImageCustomBox";
import "./CustomMake.scss";

export class CustomMake extends Component {
  state = {
    front: true,
    image: ""
  };

  handleFront = trueOrFalse => {
    this.setState({
      front: trueOrFalse
    });
  };

  fileUploadHandler = event => {
    //selectedFile
    let file = event.target.files[0];
    this.setState({ selectedFile: file }, () => {
      //upload
      const fd = new FormData();
      const { selectedFile } = this.state;
      console.log("selectedFile : " + this.state.selectedFile);
      if (selectedFile) {
        fd.append("picture", selectedFile, selectedFile.name);
        axios.post("http://10.58.4.236:8001/custom/image-url", fd).then(res => {
          this.setState({ image: res.data.images[0] }, () =>
            this.props.handleMode("image")
          );
          console.log("img-url : " + this.state.image);
        });
      }
    });
  };

  render() {
    const { front, image } = this.state;
    const { imageOption, imageActive } = this.props;
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
          >
            {/* 준식 이미지 커스텀 */}
            <ImageCustomBox
              imageOption={imageOption}
              imageActive={imageActive}
              image={image}
            />
          </div>
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
            <div className="selector-container">
              <div
                className="selector-icon"
                style={{ backgroundImage: `url(${itemChange})` }}
              ></div>
              <div className="selector-name">상품변경</div>
            </div>
            {/* 이미지업로드 */}
            <div
              className="selector-container"
              onClick={() => this.fileInput.click()}
            >
              <input
                type="file"
                style={{ display: "none" }}
                onChange={this.fileUploadHandler}
                ref={fileInput => (this.fileInput = fileInput)}
              />
              <div
                className="selector-icon"
                style={{ backgroundImage: `url(${imageUpload})` }}
              ></div>
              <div className="selector-name">이미지 업로드</div>
            </div>
            {/* 이미지업로드 */}
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
