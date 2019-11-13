import React, { Component } from "react";
import "./PrintInfo.scss";

export class PrintInfo extends Component {
  render() {
    return (
      <div className="print-info">
        <div className="print-info-title">인쇄 관련 사항</div>
        <div className="print-info-images">
          <img
            alt="printInfo"
            src="http://s3.marpple.co/files/u_14355/2019/6/original/f_402256_1560500400228_mQ1ZQd3T0TkkyDoWn7d.jpg"
          />
        </div>
        <h2>주의사항</h2>
        <ul>
          <li>
            PNG, JPG, AI, PSD 형식의 고화질 이미지 및 RGB 컬러 모드, 최소
            1000~3500px 이상 / 300dpi 이상의 해상도를 권장합니다.
          </li>
          <li>
            상품마다 이미지 크기가 다르므로, 해당 상품의 이미지 가이드를 확인해
            주세요.
          </li>
          <li>
            작은 원본 이미지를 사이즈 규격에 맞게 임의로 크게 확대할 경우 인쇄
            시 화질이 깨질 수 있습니다.
          </li>
          <li>상품 실측 사이즈를 반드시 확인해 주세요.</li>
          <li>
            인쇄를 원하시는 위치가 있을 시 [상품 제작 요청사항]에 남겨주시거나,
            1:1 상담 또는 고객센터(help@marpple.com)로 메일 주세요. 따로 위치
            지정 요청이 없으면 가장 보편적인 위치로 인쇄해드립니다.
          </li>
          <li>
            모니터, 핸드폰에 따라 실제 인쇄 색상과 다르게 보일 수 있습니다.
          </li>
        </ul>
        <h2>교환/환불 불가 사항</h2>
        <p>
          마플의 모든 상품은 고객 주문에 따라 개별 제작되는 방식으로 단순 변심을
          포함, 아래의 경우에는 교환 / 환불이 불가합니다.
        </p>
        <h3>- 디자인 시안 색상의 차이</h3>
        <p className="grey-text">
          프린팅 방식과 원단 재질에 따른 경우의 수가 다양하므로 인쇄 후 모니터,
          혹은 종이 출력물과 색상 차이가 발생할 수 있습니다.
        </p>
        <h3>- 인쇄 위치 및 크기의 차이</h3>
        <p className="grey-text">
          제품 재질에 따른 특성의 차이와 대부분의 인쇄가 수작업으로 이루어진다는
          점에서 시안과 실제 상품의 인쇄 위치 및 크기의 오차가 발생할 수
          있습니다. <br />
          인쇄 위치 및 크기를 별도로 [요청] 하지 않은 주문건에 대한 교환 또는
          환불은 불가합니다.
        </p>
        <h3>- 추가 주문 시 기존 상품 색상과의 컬러 차이</h3>
        <p className="grey-text">
          상품 컬러 및 사이즈는 제작 시기별, 생산시즌별로 원단 컬러와 사이즈
          차이가 발생할 수 있습니다.
        </p>
        <h3>- 화학 제품 사용으로 인한 손상</h3>
        <p className="grey-text">
          우레탄 전사(PU Heat Transfer) 인쇄 제품에 솔벤트와 같은 용해력이 있는
          용매를 사용한 향수를 직접적으로 분사할 경우 인쇄 부분이 손상될 수
          있으니 주의해주세요.
        </p>
        <h2>교환 환불 기간</h2>
        <p>
          물품에 문제 되는 사항에 대해서는 수령 후 7일 이내 이메일
          help@marpple.com 또는 고객센터로 연락주셔야 가능합니다.
        </p>
        <p>
          ★ 주문 완료 후 상품 및 이미지 변경을 원하실 경우 [제작준비중]
          상태에서만 변경이 가능하며 [제작중]에는 변경 및 취소가 불가합니다.
          변경을 원하시는 경우 1:1 상담 및 카톡 또는 고객센터(1566-9437)를 통해
          문의 바랍니다.
        </p>
      </div>
    );
  }
}

export default PrintInfo;
