import React, { Component } from 'react';
import PlaidLink from 'react-plaid-link'
import './App.css';

class App extends Component {
  handleOnSuccess(token, metadata) {
    debugger
  }
  render() {
    return (
      <div>
        <h1>Plaid Link:</h1>
        <PlaidLink
          publicKey="402b7402aead5333ec37bfef739268"
          product="transactions"
          env="sandbox"
          clientName="frederico"
          onSuccess={this.handleOnSuccess}
        />
      </div>
    );
  }
}

export default App;
