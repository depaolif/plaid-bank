import React, { Component } from 'react'
import axios from 'axios'
import PlaidLink from 'react-plaid-link'
import './App.css'

class App extends Component {
  componentDidMount() {
    
  }

  handleOnSuccess(public_token, metadata) {
    // send token to client server
    axios({
      method: 'post',
      url: 'http://localhost:3001/get_access_token',
      data: {
        public_token: public_token
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Plaid Link:</h1>
        <PlaidLink
        publicKey="402b7402aead5333ec37bfef739268"
        product={["auth", "transactions"]}
        env="sandbox"
        clientName="client"
        onSuccess={this.handleOnSuccess}
        />
      </div>
    );
  }
}

export default App;
