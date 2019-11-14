import React from "react";
import NavBar from "Components/NavBar";
import OrderList from "Components/OrderList";
import Footer from "Components/Footer";

import "./LikePage.scss";

export default function LikePage() {
  return (
    <>
      <NavBar />
      <OrderList />
      <Footer />
    </>
  );
}
