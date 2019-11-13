import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-body">
        <div className="footer-body-top">
          <ul className="marpple-title">
            <li className="title">WE MARPPLE</li>
          </ul>
          <ul className="marpple-intro">
            <li className="title">WE MARPPLE</li>
            <li className="text">위마플소개</li>
            <li className="text">인쇄 퀄리티</li>
            <li className="text">고객리뷰</li>
            <li className="text">이벤트</li>
          </ul>
          <ul className="help">
            <li className="title">HELP</li>
            <li className="text">주문/결제 문의</li>
            <li className="text">제작/단체 문의</li>
            <li className="text">이미지/프린팅 문의</li>
          </ul>
          <ul className="follow">
            <li className="title">FOLLOW</li>
            <div>
              <img
                src={
                  "https://s3.marpple.co/files/u_29089/2019/1/original/f_23335_1548936682190_qQUWi9nrzLZ2v8ne6A5h.png"
                }
                alt="followLogo"
              />
              <img
                src={
                  "https://s3.marpple.co/files/u_29089/2019/1/original/f_23337_1548936682190_eo0d0BDD4TyA3Our7Iw6I.png"
                }
                alt="followLogo"
              />
              <img
                src={
                  "https://s3.marpple.co/files/u_29089/2019/1/original/f_23336_1548936682190_Lp1EXsBRn2Gn1T1q5Wov.png"
                }
                alt="followLogo"
              />
              <img
                src={
                  "https://s3.marpple.co/files/u_29089/2019/1/original/f_23338_1548936682190_ASQdIMQt4GOkMNAN.png"
                }
                alt="followLogo"
              />
              <img
                src={
                  "https://s3.marpple.co/files/u_29089/2019/8/original/f_267989_1565939161950_AlpgVfMbrlAJOXc.png"
                }
                alt="followLogo"
              />
            </div>
          </ul>
          <ul className="contact">
            <li className="title">CONTACT US</li>
            <li className="number">1566-9437</li>
            <li className="text">상담가능시간: 평일 10:00 ~ 19:00</li>
            <li className="text">help@wemarpple.com</li>
          </ul>
        </div>
        <div className="footer-body-bottom">
          <div className="footer-body-bottom-left">
            <div className="footer-body-bottom-left-title">
              <div className="bar">회사소개 PDF</div>
              <div className="bar">개인정보취급방침</div>
              <div>이용약관</div>
            </div>
            <div className="footer-body-bottom-left-content">
              <div className="bar">주식회사 마켓프레스</div>
              <div className="bar">공동대표 양준식 정성욱 지소연 박준규</div>
              <div className="bar">
                사업자등록번호 105-00-123123 사업자정보 확인
              </div>
              <div className="bar">통신판매업신고 2015-서울구로-0211</div>
              <div className="bar">
                서울 구로구 디지털로 30길 28 위워크타워 7층
              </div>
              <div className="bar">고객센터 1500-0000</div>
              <div className="bar">팩스 02-0000-0000</div>
              <div>
                마플 콘텐츠의 저작권은 저작권자 또는 제공처에 있으며, 이를 무단
                사용 및 도용하는 경우 저작권법 등에 따라 법적 책임을 질 수
                있음을 알려드립니다.
              </div>
              <div>@2019 Marpple Inc. All rights reserved.</div>
            </div>
          </div>
          <div className="footer-body-bottom-right">
            <div className="footer-body-bottom-right-top">
              <img
                src={
                  "https://s3.marpple.co/files/u_29089/2019/1/original/f_23325_1548409534085_M3Pk3el0qw6mu7K9EFPq4f.png"
                }
                alt="footer-right-img"
              />
            </div>
            <div className="footer-body-bottom-right-bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
