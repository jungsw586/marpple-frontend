import React from "react";
import SizeCount from "./SizeCount";
import "./OrderListTableContent.scss";

export default function OrderListTableContent(props) {
  return (
    <tr>
      <td>
        <div className="product-info">
          <img
            className="product-info-img"
            src={
              "https://s3.marpple.co/files/u_1085120/2019/9/150/f_787427_1567581236777_KLX5GtLma0QZ8M4Sd6ih.png?canvas=v2"
            }
            alt="product-img"
          />
          <div className="product-info-desc">
            특양면 베이직 후드(남녀공용) [멜란지]
          </div>
        </div>
      </td>
      <td>
        <div className="size-count-info">
          <SizeCount size={"S(90)"} count={"1"} />
          <SizeCount size={"M(95)"} count={"1"} />
          <SizeCount size={"L(100)"} count={"1"} />
          <SizeCount size={"XL(105)"} count={"1"} />
        </div>
      </td>
      <td>
        <div className="price-info">16,400원</div>
      </td>
      <td>
        {props.mode === "cart" ? (
          <div className="edit-info">
            <div className="edit-count">수량 변경</div>
            <div className="edit-send-likelist">나중에 구매</div>
            <div className="edit-delete">삭제</div>
          </div>
        ) : (
          <div className="edit-info">
            <div className="edit-send-cartlist">장바구니 담기</div>
            <div className="edit-delete">삭제</div>
          </div>
        )}
      </td>
    </tr>
  );
}
