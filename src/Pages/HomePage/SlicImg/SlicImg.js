import React, { Component } from "react";
import "./SlicImg.scss";

export default class SlicImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slicIdx: 1,
      autoSlic: setInterval(this.handlerSlic, 3000)
    };
  }

  handlerSlic = () => {
    this.state.slicIdx !== 3
      ? this.setState({ slicIdx: this.state.slicIdx + 1 })
      : this.setState({ slicIdx: 1 });
  };

  componentWillUnmount = () => {
    clearInterval(this.state.autoSlic);
  };

  render() {
    const { slicIdx } = this.state;
    return (
      <div className="homepage-slic-img-container">
        <div className={`homepage-slic-img-content slicIdx${slicIdx}`}>
          <img
            className="homepage-slic-img-1"
            src={
              "https://s3.marpple.co/files/u_202190/2019/9/original/f_796376_1567746954759_dQJIqnWfsGsg9q5RT.jpg"
            }
            alt="slic-img-1"
          />
          <img
            className="homepage-slic-img-2"
            src={
              "https://s3.marpple.co/files/u_202190/2019/8/original/f_734834_1566522539959_qBf1mqPT6S0S8F4ecFsv.jpg"
            }
            alt="slic-img-2"
          />
          <img
            className="homepage-slic-img-3"
            src={
              "https://s3.marpple.co/files/u_1085120/2019/11/original/1112119bca36c030524e3f440b34b7426ef6ea6621f98d9.jpg"
            }
            alt="slic-img-3"
          />
        </div>
      </div>
    );
  }
}
