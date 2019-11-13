import React, { Component } from "react";
import "./HomePage.scss";
import NavBar from "Components/NavBar";
import SlicImg from "./SlicImg";
import SlicText from "./SlicText";
import ServiceDesc from "./ServiceDesc";
import ProductList from "./ProductList";
import Footer from "Components/Footer";

export class HomePage extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="homepage-body">
          <SlicImg />
          <SlicText />
          <ServiceDesc />
          <ProductList />
          <ProductList />
        </div>
        <Footer />
      </>
    );
  }
}

export default HomePage;
