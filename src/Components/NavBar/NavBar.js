import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logOn: true,
      signuploginModalSwitch: false,
      signupModalPage: true
    };
  }

  handlerSignupLoginModalSwitch = e => {
    this.state.signuploginModalSwitch
      ? this.setState({
          signuploginModalSwitch: false
        })
      : this.setState({
          signuploginModalSwitch: true
        });
  };

  handlerSignupModalPageOn = e => {
    this.setState({
      signupModalPage: true
    });
  };

  handlerSignupModalPageOff = e => {
    this.setState({
      signupModalPage: false
    });
  };

  render() {
    const { logOn, signuploginModalSwitch, signupModalPage } = this.state;
    return (
      <div className="navBar-container">
        {!logOn && signuploginModalSwitch ? (
          <div className="signup-login-modal-background">
            <div className="signup-login-modal-content">
              <div
                className="signup-login-modal-exit"
                onClick={this.handlerSignupLoginModalSwitch}
              ></div>
              <div className="signup-login-modal-title">
                <div className="signup" onClick={this.handlerSignupModalPageOn}>
                  회원가입
                </div>
                <div className="login" onClick={this.handlerSignupModalPageOff}>
                  로그인
                </div>
              </div>
              {signupModalPage ? (
                <div className="signup-login-modal-signup-btn">
                  <div className="signup-kakao">카카오톡 계정으로 가입하기</div>
                  <div className="or">or</div>
                  <div className="signup-google">구글 계정으로 가입하기</div>
                </div>
              ) : (
                <div className="signup-login-modal-signup-btn">
                  <div className="signup-kakao">
                    카카오톡 계정으로 로그인하기
                  </div>
                  <div className="or">or</div>
                  <div className="signup-google">구글 계정으로 로그인하기</div>
                </div>
              )}
            </div>
          </div>
        ) : null}
        <div className="navBar-body">
          <div className="navBar-body-left">
            <Link className="navBar-title" to={"/"}>
              WE MARPPLE
            </Link>
            <div className="navBar-menu">
              <Link className="navBar-menu-clothes" to={"/menu/:id"}>
                Clothes
              </Link>
              <Link className="navBar-menu-phoneCase" to={"/menu/:id"}>
                PhoneCases
              </Link>
            </div>
          </div>
          <div className="navBar-body-right">
            <div className="navBar-account">
              <div className="navBar-myPage">
                <img
                  onClick={this.handlerSignupLoginModalSwitch}
                  src={
                    "https://s3.marpple.co/files/u_29089/2019/2/original/f_23507_1550685476446_pzav5ls5x1T4u0q2TJ0xkc.png"
                  }
                  alt="MyPage"
                />
              </div>
              <Link className="navBar-like" to={"/like_list"}>
                <img
                  src={
                    "https://s3.marpple.co/files/u_29089/2019/2/original/f_23502_1550685349645_VQhJUU8KLeQqWq2qE.svg"
                  }
                  alt="Like"
                />
              </Link>
              <Link className="navBar-cart" to={"/cart_list"}>
                <img
                  src={
                    "https://s3.marpple.co/files/u_29089/2019/2/original/f_23503_1550685349645_n6K6x6A8Lm9EiPd2C5K1I4Cw.svg"
                  }
                  alt="Cart"
                />
              </Link>
            </div>
            {logOn && signuploginModalSwitch ? (
              <div className="account-modal-background">
                <div className="email">jungsw586@gmail.com</div>
                <div className="history">구매내역</div>
                <div className="logout">로그아웃</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
