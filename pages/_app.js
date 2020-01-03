import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import Layout from '../src/components/Layout';
import store from '../src/store';
import withReduxStore from '../src/with-redux-store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
class MoiCode extends App {
  constructor(props) {
    super(props);
    this.persistor = persistStore(props.reduxStore);
  }

  render() {
    const { Component, pageProps, reduxStore,  } = this.props;
    return (
      <Provider store={reduxStore}>
        <PersistGate
          loading={<Component {...pageProps} />}
          persistor={this.persistor}>
          <div className="h-100">
            <Head>
              <script
                src="https://kit.fontawesome.com/59a68cff2e.js"
                crossorigin="anonymous"></script>
              <link rel="manifest" href="/manifest.json" />
              <link rel="shortcut icon" href="/favicon.ico" />
              <title>Moi Code 🍄🐱‍💻</title>
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}
export default withReduxStore(MoiCode);
