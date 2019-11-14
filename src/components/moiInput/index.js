import React, { Component } from "react";
export default class extends Component {
  onTextChange(e) {}
  render() {
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input
        onChange={this.onTextChange}
        value="email"
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small id="emailHelp" className="form-text text-muted">
        We'll never share your email with anyone else.
      </small>
    </div>;
  }
}
