import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/account.css'

class Account extends Component {
  render() {
    const { account_id, balances, name, subtype } = this.props.accountInfo
    return (
      <div className="account">
        <p className="name">
          Account Name: {name}
        </p>
        <p>
          Account Type: {subtype}
        </p>
        <p>
          Balances
        </p>
        <ul>
          <li>Available: {balances["available"]}</li>
          <li>Current: {balances["current"]}</li>
          <li>Limit: {balances["limit"] === null ? "N/A" : balances["limit"]}</li>
        </ul>
      </div>
    )
  }
}

export default Account
