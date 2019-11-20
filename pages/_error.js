import React, { Component } from "react";
import Header from "../src/components/Header";
export default class extends Component {
  static async getInitialProps({ req }) {
    const isServer = typeof window === "undefined";


    return { isServer };
  }

  render() {
    const {isServer } = this.props;
    return (
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <Header>
          <div className="d-flex flex-column h-100 justify-content-center ml-5 mx-auto">
            <h1 className="display-3">ERROR</h1>
          </div>
        </Header>
      </div>
    );
  }
}
