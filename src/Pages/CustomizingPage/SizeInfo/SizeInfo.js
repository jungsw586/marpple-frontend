import React, { Component } from "react";
import "./SizeInfo.scss";

export class SizeInfo extends Component {
  state = {
    data: this.props.data.size_info[0]
  };

  render() {
    return (
      <div className="size-info">
        <div className="size-info-title">사이즈 정보</div>
        <table>
          <tr className="first-row">
            <th>Size (cm)</th>
            <td>S</td>
            <td>M</td>
            <td>L</td>
            <td>XL</td>
            <td>2XL</td>
            <td>3XL</td>
          </tr>
          {(() => {
            const { data } = this.state;
            const _size = [];
            for (const key in data) {
              _size.push(
                <tr>
                  <th>{key}</th>
                  {data[`${key}`].map(e => {
                    return <td>{e}</td>;
                  })}
                </tr>
              );
            }
            return _size;
          })()}
        </table>
        <ul className="size-about">
          <li>
            상세 사이즈는 측정 방법과 위치에 따라 1~3cm 오차가 발생할 수
            있습니다. 기재된 상세 사이즈와 실측 오차(1~3cm)에 대한 불량처리는
            어려우며 교환 및 환불 사유가 될 수 없습니다.
          </li>
          <li>
            마플에서 판매되는 상품은 각 브랜드, 도매처에서 각각의 샘플링을 거쳐
            공급되는 제품이므로, 특정 브랜드 또는 가지고 계신 상품과 상세
            사이즈가 다를 수 있습니다. 실측구매 시 상세 사이즈를 반드시 확인
            부탁드립니다.
          </li>
        </ul>
      </div>
    );
  }
}

export default SizeInfo;
