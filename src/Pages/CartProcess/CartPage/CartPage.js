import React from "react";
import NavBar from "Components/NavBar";
import OrderList from "Components/OrderList";
import "./CartPage.scss";

export default function CartPage() {
  return (
    <>
      <NavBar />
      <OrderList />
    </>
  );
}
