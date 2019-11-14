import React from "react";
import NavBar from "Components/NavBar";
import OrderList from "Components/OrderList";
import Footer from "Components/Footer";
import "./CartPage.scss";

export default function CartPage() {
  return (
    <>
      <NavBar />
      <OrderList />
      <Footer />
    </>
  );
}
