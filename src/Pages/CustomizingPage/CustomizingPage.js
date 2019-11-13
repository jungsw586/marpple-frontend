import React, { Component } from "react";
import CustomizingArea from "./CustomizingArea";
import ModelImage from "./ModelImage";
import ItemInfo from "./ItemInfo";
import SizeInfo from "./SizeInfo";
import PrintInfo from "./PrintInfo";
import customizingDATA from "DATA/customizingDATA";
import "./CustomizingPage.scss";

export class CustomizingPage extends Component {
  state = {
    data: customizingDATA
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <div className="nav">WEMARPPLE</div>
        <CustomizingArea data={data} />
        <ModelImage data={data} />
        <ItemInfo data={data} />
        <SizeInfo data={data} />
        <PrintInfo data={data} />
        {/* <div>Footer</div> */}
      </>
    );
  }
}

export default CustomizingPage;
