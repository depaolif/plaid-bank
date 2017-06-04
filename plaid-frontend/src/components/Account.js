import React, { Component } from 'react'
import Transactions from './Transactions'
import { Grid, Row, Col } from 'react-bootstrap'
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
    if (!this.state.showTransactions) {
      this.setState({
        showTransactions: true,
      });
    } else {
      this.setState({
        showTransactions: false,
      });
    }
  }

  render() {
    const { account_id, balances, name, subtype } = this.props.accountInfo
    const seeTransactions = subtype !== "cd" ?
       <p className="see-transactions" onClick={this.handleClick}>
        {this.state.showTransactions ? "Hide Transactions" : "See Transactions"}
      </p> :
      null
    const transactions = this.state.showTransactions ?
       <Transactions accountId={account_id} /> :
      null
    var subtypeDisplay = subtype === "cd" ? "CD" : subtype[0].toUpperCase() + subtype.slice(1)
    return (
      <Grid className="account">
        <Row className="account-info">
          <Col md={4}>
            <p className="header">
              ACCOUNT NAME
            </p>
            <p>
              {name}
            </p>
          </Col>
          <Col md={4}>
            <p className="header">
              ACCOUNT TYPE
            </p>
            <p>
              {subtypeDisplay}
            </p>
          </Col>
          <Col md={4}>
            <p className="header">
              BALANCE
            </p>
            <ul>
              {subtype === "checking" || subtype === "savings" ? <li>Available: ${balances["available"]}</li> : null}
              <li>Current: ${balances["current"]}</li>
              {subtype === "credit" ? <li>Limit: ${balances["limit"]}</li> : null}
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {seeTransactions}
            {transactions}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Account
