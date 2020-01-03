import React, { Component } from 'react';
import Header from '../src/components/Header';
import fetch from 'isomorphic-unfetch';
import mapStateToProps from 'react-redux/lib/connect/mapStateToProps';
import { connect } from 'react-redux';
import { updateState } from '../src/actions';
class Index extends Component {
  static async getInitialProps({ req }) {
    const isServer = typeof window === 'undefined';
    const res = await fetch(
      'https://programming-quotes-api.herokuapp.com/quotes/random/lang/en'
    );
    const json = await res.json();

    return { isServer, quote: json.en, author: json.author };
  }
  render() {
    const { quote, author, isServer, updateState } = this.props;
    updateState('isServer', isServer);
    return (
      <div className="h-100 d-flex flex-column justify-content-center align-items-center">
        <Header>
          <div className="d-flex flex-column h-100 justify-content-center ml-5 mx-auto">
            <p>
              <em>"{quote}"</em>
            </p>
            <p>-{author}</p>
            <p>{isServer}</p>
          </div>
        </Header>
      </div>
    );
  }
}

export default connect(null, { updateState })(Index);
