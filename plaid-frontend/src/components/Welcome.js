import React, { Component } from 'react'
import axios from 'axios'
import PlaidLink from 'react-plaid-link'
import { connect } from 'react-redux'
import { loadAccounts, loadTransactions } from '../actions/accounts.js'
import '../css/welcome.css'

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.handleOnSuccess = this.handleOnSuccess.bind(this)
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
    .then((response) => {
      var data = response.data
      // need to set everything in the redux store
      this.props.loadAccounts(data["accounts_info"])
      this.props.loadTransactions(data["transactions_info"])
      debugger
    })
  }

  render() {
    return (
      <div id="welcome">
        <h1>Welcome To Plaid</h1>
        <h2>Log in to choose your bank</h2>
        <PlaidLink
        publicKey="402b7402aead5333ec37bfef739268"
        product={["auth", "transactions"]}
        env="sandbox"
        clientName="client"
        onSuccess={this.handleOnSuccess}
        buttonText="Log In"
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loadAccounts: (accounts) => {
    dispatch(loadAccounts(accounts))
  },
  loadTransactions: (transactions) => {
    dispatch(loadTransactions(transactions))
  }
})

export default connect(null, mapDispatchToProps)(Welcome);
