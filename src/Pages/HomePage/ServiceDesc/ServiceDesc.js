import React from "react";
import "./ServiceDesc.scss";

export default function ServiceDesc() {
  return (
    <div className="homepage-service-description-body">
      <div className="homepage-service-desc-container">
        <img
          className="homepage-service-desc-imgBox"
          src={
            "https://s3.marpple.co/files/u_14355/2019/5/original/f_294448_1558517103701_qhKlpMr0L6i1ZiF4PvL.png"
          }
          alt={"descImg1"}
        />
        <div className="homepage-service-desc-textBox">
          <div className="service-title">쉽고 빠른 만들기</div>
          <div className="service-desc">별도 프로그램 설치없이</div>
          <div className="service-desc">3분 완성 만들기툴로 간편하게</div>
        </div>
      </div>
      <div className="homepage-service-desc-container">
        <img
          className="homepage-service-desc-imgBox"
          src={
            "https://s3.marpple.co/files/u_14355/2019/5/original/f_294447_1558517103701_OVUx6zZk5muLKiUw5w.png"
          }
          alt={"descImg2"}
        />
        <div className="homepage-service-desc-textBox">
          <div className="service-title">꼼꼼한 상품 제작</div>
          <div className="service-desc">커스텀 제작에 대한 최고의 노하우로</div>
          <div className="service-desc">최고의 품질을 보장</div>
        </div>
      </div>
      <div className="homepage-service-desc-container">
        <img
          className="homepage-service-desc-imgBox"
          src={
            "https://s3.marpple.co/files/u_14355/2019/5/original/f_294449_1558517103701_XCDJ3FN4pHGivAVC3E.png"
          }
          alt={"descImg3"}
        />
        <div className="homepage-service-desc-textBox">
          <div className="service-title">디자인 무료 제공</div>
          <div className="service-desc">디자인 아이디어를 제공하는</div>
          <div className="service-desc">마플만의 무료 템플릿</div>
        </div>
      </div>
    </div>
  );
}
