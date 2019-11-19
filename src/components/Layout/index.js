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
class Layout extends Component {
  constructor(props) {
    super(props);
    props.handleAuth();
  }
  render() {
    const { children } = this.props;

    return (
      <div className="h-100">
        <Navbar />
        <div
          onClick={() => {
            document.querySelector(".collapse").classList.contains("show")
              ? document.querySelector(".collapse").classList.remove("show")
              : null;
          }}
          className="layout container-fluid h-100"
        >
          {children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authed: state.AuthReducer.authed
});
export default connect(mapStateToProps, { handleAuth })(Layout);
