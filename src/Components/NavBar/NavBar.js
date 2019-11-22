import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./NavBar.scss";
import { KAKAO_KEY } from "config";

class NavBar extends Component {
  state = {
    mode: this.props.match.path,
    logOn: true, //=>back 연결후 false로 수정
    signuploginModalSwitch: false,
    signupModalState: "signup"
  };

  handlerSignupLoginModalSwitch = () => {
    this.setState({
      signuploginModalSwitch: !this.state.signuploginModalSwitch,
      signupModalState: "signup"
    });
  };

  handlerSignupModalPage = e => {
    this.state.signupModalState !== e.target.className &&
      this.setState({
        signupModalState: e.target.className
      });
  };

  handlerLogout = () => {
    localStorage.removeItem("wemarpple-token");
    this.setState(
      {
        logOn: false,
        signuploginModalSwitch: false
      },
      () => this.props.history.push("/")
    );
  };

  componentDidMount = () => {
    !window.Kakao.isInitialized() && window.Kakao.init(KAKAO_KEY);
    // <-------------------------back 연결 후 주석 해제-------------------------->
    // if (this.state.mode === "/list/cart" || this.state.mode === "/list/like") {
    //   localStorage.getItem("wemarpple-token")
    //     ? this.setState({ logOn: true })
    //     : this.setState({ logOn: false }, () => this.props.history.push("/"));
    // } else {
    //   localStorage.getItem("wemarpple-token")
    //     ? this.setState({ logOn: true })
    //     : this.setState({ logOn: false });
    // }
  };

  handlerKakaoLoginSignup = () => {
    window.Kakao.Auth.login({
      success: authObj => {
        fetch("http://10.58.4.236:8001/user/kakao-login", {
          method: "get",
          headers: {
            Authorization: authObj.access_token
          }
        })
          .then(res => res.json())
          .then(res => {
            if (res.jwt_token) {
              localStorage.setItem("wemarpple-token", res.jwt_token);
              this.setState(
                {
                  logOn: true,
                  signuploginModalSwitch: false
                },
                () => this.props.history.push("/")
              );
            } else {
              alert("Login Failed");
            }
          });
      },
      fail: err => {
        alert(JSON.stringify(err));
      }
    });
  };

  render() {
    const { logOn, signuploginModalSwitch, signupModalState } = this.state;
    return (
      <div className="navBar-container">
        {!logOn && signuploginModalSwitch && (
          <div className="signup-login-modal-background">
            <div className="signup-login-modal-content">
              <div
                className="signup-login-modal-exit"
                onClick={this.handlerSignupLoginModalSwitch}
              ></div>
              <div className="signup-login-modal-title">
                <div className="signup" onClick={this.handlerSignupModalPage}>
                  회원가입
                </div>
                <div className="login" onClick={this.handlerSignupModalPage}>
                  로그인
                </div>
              </div>
              {signupModalState === "signup" ? (
                <div className="signup-login-modal-signup-btn">
                  <div
                    className="signup-kakao"
                    onClick={this.handlerKakaoLoginSignup}
                  >
                    <img
                      src={
                        "https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium_ov.png"
                      }
                      alt="kakao-login"
                    />
                    <div className="text">카카오톡 계정으로 가입하기</div>
                  </div>
                  <div className="or">or</div>
                  <div className="signup-google">
                    <img
                      src={
                        "https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
                      }
                      alt="kakao-login"
                    />
                    <div className="text">구글 계정으로 가입하기</div>
                  </div>
                </div>
              ) : (
                <div className="signup-login-modal-signup-btn">
                  <div
                    className="signup-kakao"
                    onClick={this.handlerKakaoLoginSignup}
                  >
                    <img
                      src={
                        "https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium_ov.png"
                      }
                      alt="kakao-login"
                    />
                    <div className="text">카카오톡 계정으로 로그인하기</div>
                  </div>
                  <div className="or">or</div>
                  <div className="signup-google">
                    <img
                      src={
                        "https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png"
                      }
                      alt="kakao-login"
                    />
                    <div className="text">구글 계정으로 로그인하기</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="navBar-body">
          <div className="navBar-body-left">
            <Link className="navBar-title" to={"/"}>
              WE MARPPLE
            </Link>
            <div className="navBar-menu">
              <Link className="navBar-menu-clothes" to={"/menu"}>
                의류
              </Link>
              <Link className="navBar-menu-phoneCase" to={"/menu"}>
                폰케이스
              </Link>
            </div>
          </div>
          <div className="navBar-body-right">
            <div className="navBar-account">
              {logOn ? (
                <div className="navBar-myPage">
                  <img
                    onClick={this.handlerSignupLoginModalSwitch}
                    src={
                      "https://s3.marpple.co/files/u_29089/2019/2/original/f_23507_1550685476446_pzav5ls5x1T4u0q2TJ0xkc.png"
                    }
                    alt="MyPage"
                  />
                  <Link className="navBar-like" to={"/list/like"}>
                    <img
                      src={
                        "https://s3.marpple.co/files/u_29089/2019/2/original/f_23502_1550685349645_VQhJUU8KLeQqWq2qE.svg"
                      }
                      alt="Like"
                    />
                  </Link>
                  <Link className="navBar-cart" to={"/list/cart"}>
                    <img
                      src={
                        "https://s3.marpple.co/files/u_29089/2019/2/original/f_23503_1550685349645_n6K6x6A8Lm9EiPd2C5K1I4Cw.svg"
                      }
                      alt="Cart"
                    />
                  </Link>
                </div>
              ) : (
                <div className="navBar-myPage">
                  <img
                    onClick={this.handlerSignupLoginModalSwitch}
                    src={
                      "https://s3.marpple.co/files/u_29089/2019/2/original/f_23507_1550685476446_pzav5ls5x1T4u0q2TJ0xkc.png"
                    }
                    alt="MyPage"
                  />
                  <div
                    className="navBar-like"
                    onClick={this.handlerSignupLoginModalSwitch}
                  >
                    <img
                      src={
                        "https://s3.marpple.co/files/u_29089/2019/2/original/f_23502_1550685349645_VQhJUU8KLeQqWq2qE.svg"
                      }
                      alt="Like"
                    />
                  </div>
                  <div
                    className="navBar-cart"
                    onClick={this.handlerSignupLoginModalSwitch}
                  >
                    <img
                      src={
                        "https://s3.marpple.co/files/u_29089/2019/2/original/f_23503_1550685349645_n6K6x6A8Lm9EiPd2C5K1I4Cw.svg"
                      }
                      alt="Cart"
                    />
                  </div>
                </div>
              )}
              {logOn && signuploginModalSwitch && (
                <div className="account-modal-background">
                  <div className="email">jungsw586@gmail.com</div>
                  <div className="history">구매내역</div>
                  <div className="logout" onClick={this.handlerLogout}>
                    로그아웃
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(NavBar);
