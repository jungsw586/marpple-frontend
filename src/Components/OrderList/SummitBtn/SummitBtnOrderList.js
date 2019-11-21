import React from "react";
import "./SummitBtnOrderList.scss";

export default function SummitBtnOrderList(props) {
  return (
    <>
      {props.mode === "/list/cart" ? (
        <div className="summit">주문서 작성</div>
      ) : (
        <div className="summit">모두 장바구니로 이동</div>
      )}
    </>
  );
}
