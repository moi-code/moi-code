import React from "react";
import App from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import Navbar from "../src/components/Navbar";
import Layout from "../src/components/Layout";
import store  from "../src/store.js";
class MoiCode extends App {
  componentDidMount(){
    require('../src/firebase')
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <moi className="h-100">
          <Head>
            <title>Moi Code</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </moi>
      </Provider>
    );
  }
}

export default MoiCode;
