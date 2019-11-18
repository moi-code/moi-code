import React, { Component } from "react";
import Navbar from "../Navbar";
import firebase from "../../../public/firebase/firebase.client";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../public/index.css";
import "../../../public/fonts.css";
// import "../../../public/bootstrap.bundle";
import "jquery/dist/jquery.min";
import { connect } from "react-redux";
import { IsAuthed } from "../../actions/AuthActions";
class Layout extends Component {
  componentDidMount() {
    const { auth, IsAuthed } = this.props;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
        IsAuthed(true);
      } else {
        // User is signed out.
        // ...
      }
    });
  }
  render() {
    const { children } = this.props;
    return (
      <div className="h-100">
        <Navbar />
        <div className="layout container-fluid">{children}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.AuthReducer.auth
});
export default connect(mapStateToProps, { IsAuthed })(Layout);
