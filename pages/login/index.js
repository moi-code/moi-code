import React, { Component } from "react";
import { connect } from "react-redux";
import "./login.css";
import { MoiInput, MoiForm } from "../../src/components/common";
import { onTextChange, userLogin } from "./../../src/actions";
class Login extends Component {
  onSubmit() {
    const { email, password, userLogin } = this.props;

    console.log("Submitting");

    if (email.length > 0 && password.length > 0) userLogin(email, password);
  }

  render() {
    const { email, password, onTextChange, disabled } = this.props;
    return (
      <div className="h-100 form mx-auto d-flex flex-column justify-content-center">
        <style jsx>{`
          .form {
            max-width: 51.25rem !important;
          }
        `}</style>
        <MoiForm
          onSubmit={e => {
            e.preventDefault();
            this.onSubmit();
          }}
        >
          <MoiInput
            label="Email"
            onChangeText={e => {
              e.preventDefault();
              onTextChange({
                prop: "email",
                value: e.target.value
              });
            }}
            value={email}
            disabled={disabled}
            type="email"
            className="form-control"
            id="loginEmail"
            placeholder="Email@Email.com"
          />
          <MoiInput
            label="Password"
            onChangeText={e => {
              e.preventDefault();
              onTextChange({
                prop: "password",
                value: e.target.value
              });
            }}
            value={password}
            type="password"
            className="form-control"
            id="loginPassword"
            placeholder="Password"
          />
        </MoiForm>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  email: state.GeneralReducer.email,
  password: state.GeneralReducer.password
});
export default connect(mapStateToProps, { onTextChange, userLogin })(Login);
