import React, { Component } from "react";
import CustomizingArea from "./CustomizingArea";
import ModelImage from "./ModelImage";
import ItemInfo from "./ItemInfo";
import SizeInfo from "./SizeInfo";
import PrintInfo from "./PrintInfo";
import NavBar from "Components/NavBar";
import Footer from "Components/Footer";
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
        <NavBar />
        <CustomizingArea data={data} />
        <ModelImage data={data} />
        <ItemInfo data={data} />
        <SizeInfo data={data} />
        <PrintInfo data={data} />
        <Footer />
      </>
    );
  }
}

export default CustomizingPage;
