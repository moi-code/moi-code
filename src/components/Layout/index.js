import Router from "next/router";
import React, { Component } from "react";
import Navbar from "../Navbar";
import firebase from "../../../public/firebase/firebase.client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../public/index.css";
import "../../../public/fonts.css";
// import "../../../public/bootstrap.bundle";
import "jquery/dist/jquery.min";
import { connect } from "react-redux";
import { handleAuth } from "../../actions";
import Footer from "../Footer";
class Layout extends Component {
  constructor(props) {
    super(props);
    props.handleAuth();
  }
  render() {
    const { children } = this.props;

    return (
      <div className="h-100 bg-dark">
        <style jsx>{`
          html,
          body,
          body > div {
            height: 100%;
            /* Gotham ScreenSmart Light */
            font-family: "MoiGoth", "MoiGotha", monospace;
            font-style: normal;
            font-weight: 300;
            background-color: #eee;
          }
          ::-webkit-scrollbar {
            display: none;
          }
          .noselect {
            -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currentlysupported by Chrome and Opera */
          }
          .fnt-white{
            color:#fff !important
          }
          .layout {
            height: calc(100% - 7.1rem);
          }
          .twitch-embed iframe:nth-child(2) {
            display: none !important;
          }
          a {
            color: #000;
          }
          a:hover {
            color: purple;
          }
        `}</style>
        <Navbar />
        <div
          onClick={() => {
            document.querySelector(".collapse").classList.contains("show")
              ? document.querySelector(".collapse").classList.remove("show")
              : null;
          }}
          className="layout container-fluid bg-dark fnt-white"
        >
          {children}
          <Footer/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authed: state.AuthReducer.authed
});
export default connect(mapStateToProps, { handleAuth })(Layout);
