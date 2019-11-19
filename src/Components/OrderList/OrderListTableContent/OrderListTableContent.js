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
            {`${props.name} [${props.color}]`}
          </div>
        </div>
      </td>
      <td>
        <div className="size-count-info">
          {(() => {
            let _sizeList = [];
            for (let key in props.size_info) {
              _sizeList.push(
                <SizeCount key={key} size={key} count={props.size_info[key]} />
              );
            }
            return _sizeList;
          })()}
        </div>
      </td>
      <td>
        <div className="price-info">{`${props.price}원`}</div>
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
