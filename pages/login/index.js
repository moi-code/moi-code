import React, { Component } from "react";
import './login.css'
class Login extends Component {
  onTextChange(e){
    console.log()
  }
  render() {
    return (
      <div className="h-100 form mx-auto d-flex flex-column justify-content-center">
        <form className="mt-5 p-5 mx-auto border border-dark bg-white">

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={}
              value="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
