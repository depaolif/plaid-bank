import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.handler = window.Plaid.create({
        clientName: 'frederico',
        env: 'sandbox',
        key: '402b7402aead5333ec37bfef739268', // Replace with your public_key to test with live credentials
        product: ['auth', 'transactions'],
        // webhook: '[WEBHOOK_URL]', // Optional – use webhooks to get transaction and error updates
        // selectAccount: false, // Optional – trigger the Select Account
        onLoad: function() {
          // Optional, called when Link loads
        },
        onSuccess: function(public_token, metadata) {
          // Send the public_token to your app server.
          // The metadata object contains info about the institution the
          // user selected and the account ID, if `selectAccount` is enabled.
          debugger
          axios.post('/localhost:3001/get_access_token', {
            public_token: public_token,
          });
        },
        onExit: function(err, metadata) {
          // The user exited the Link flow.
          if (err != null) {
            // The user encountered a Plaid API error prior to exiting.
          }
          // metadata contains information about the institution
          // that the user selected and the most recent API request IDs.
          // Storing this information can be helpful for support.
        }
      });
  }

  handlerOpen() {
    this.handler.open()
  }

  render() {
    return (
      <div>
        <h1>Plaid Link:</h1>
        <button id="link-button" onClick={this.handlerOpen}>Link Account</button>
      </div>
    );
  }
}

export default App;
