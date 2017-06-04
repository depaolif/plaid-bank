import React, { Component } from 'react'
import Transactions from './Transactions'
import '../css/account.css'

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTransactions: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      showTransactions: true,
    });
  }

  render() {
    const { account_id, balances, name, subtype } = this.props.accountInfo
    const seeTransactions = subtype !== "cd" ?
       <p className="see-transactions" onClick={this.handleClick}>
        See Transactions
      </p> :
      null
    const transactions = this.state.showTransactions ?
       <Transactions accountId={account_id} /> :
      null
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
        {seeTransactions}
        {transactions}
      </div>
    )
  }
}

export default Account
