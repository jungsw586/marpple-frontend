import React, { Component } from "react";
import "./SlicText.scss";

export default class SlicText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slicIdx: 1,
      autoSlic: setInterval(this.handlerSlic, 1500)
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
      <div className="homepage-slic-text-container">
        <div className="homepage-slic-text-body">
          <h3 className="homepage-slic-text" onClick={this.handlerSlic}>
            " We print your design on
          </h3>
          <div className={`homepage-slic-text-content slicIdx${slicIdx}`}>
            <h1>Hoodies</h1>
            <h1>IPhone</h1>
            <h1>Galaxy</h1>
          </div>
          <div className="underline"></div>
          <h3 className="homepage-slic-text">"</h3>
        </div>
      </div>
    );
  }
}
