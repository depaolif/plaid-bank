import React, { Component } from 'react'
import axios from 'axios'
import PlaidLink from 'react-plaid-link'
import { connect } from 'react-redux'
import { loadAccounts, loadTransactions } from '../actions/accounts.js'
import '../css/welcome.css'

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
    this.handleOnSuccess = this.handleOnSuccess.bind(this)
  }

  handleOnSuccess(public_token, metadata) {
    this.setState({
      loading: true
    });
    axios({
      method: 'post',
      url: 'http://localhost:3001/get_access_token',
      data: {
        public_token: public_token
      }
    })
    .then((response) => {
      var data = response.data
      this.props.loadAccounts(data["accounts_info"])
      this.props.loadTransactions(data["transactions_info"])
    })
  }

  render() {
    const display = this.state.loading ?
      <div id="loading">
        Loading account info
        <div id="spin-panel">
          <span id="loading8-1">
                <span id="CircleBottom"><span className="ball"></span></span>
          </span>
            <span id="loading8-2">
                <span id="CircleMiddle"><span className="ball"></span></span>
          </span>
            <span id="loading8-3">
                <span id="CircleTop"><span className="ball"></span></span>
          </span>
        </div>
      </div> :
      <div id="welcome">
        <h1>Welcome To Kard Banking</h1>
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

    return (
      <div>{display}</div>
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
