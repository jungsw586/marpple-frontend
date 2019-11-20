import React, { Component } from "react";

export class RangeBar extends Component {
  render() {
    return (
      <div className="color">
        <div
          className="color__preview"
          //   style={{
          //     backgroundColor: `hsla(${this.state.value}, 100%, 50%, 1`
          //   }}
        />
        <input
          className="input"
          type="range"
          min="0"
          max="360"
          //   value={this.state.value}
          //   onChange={this.handleChange}
        />
        <div className="color__value">
          Hue&nbsp;
          <span style={{ color: `hsla(${this.state.value}, 100%, 50%, 1` }}>
            {/* {this.state.value} */}
          </span>
        </div>
      </div>
    );
  }
}

export default RangeBar;
