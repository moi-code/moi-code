import React, { Component } from "react";
import Header from "../src/components/Header";
import fetch from "isomorphic-unfetch";
export default class extends Component {
  static async getInitialProps({ req }) {
    const isServer = typeof window === "undefined";
    const res = await fetch(
      "https://programming-quotes-api.herokuapp.com/quotes/random/lang/en"
    );
    const json = await res.json();

    return { isServer, en: json.en, author: json.author };
  }

  render() {
    const { en, author, isServer } = this.props;
    return (
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <Header>
          <div className="d-flex flex-column h-100 justify-content-center ml-5 mx-auto">
            <h1 className="display-3">Moi Code</h1>
            <p className="lead">Moi Everything</p>
            <p>{en}</p>
            <p>-{author}</p>
          </div>
        </Header>
        <p
          className="lead"
          title="Using NextJS and Express for SSR Optimization."
        >
          <br />
          <strong>{isServer ? "Server" : "Client"} side</strong>.
        </p>
      </div>
    );
  }
}
