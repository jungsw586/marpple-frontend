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
            src={props.image}
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
              if (props.size_info[key] !== 0) {
                _sizeList.push(
                  <SizeCount
                    key={key}
                    size={key}
                    count={props.size_info[key]}
                  />
                );
              }
            }
            return _sizeList;
          })()}
        </div>
      </td>
      <td>
        <div className="price-info">{`${props.price.toLocaleString()}원`}</div>
      </td>
      <td>
        {props.mode === "/list/cart" ? (
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
