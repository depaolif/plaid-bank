import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import AccountsList from './AccountsList'
import { Grid, Row, Col } from 'react-bootstrap'
import "../css/dashboard.css"

class Dashboard extends Component {
  render() {
    return (
      <Grid id="dashboard">
        <Row>
          <Navbar />
        </Row>
        <Row id="accounts">
          <h1>My Accounts</h1>
          <AccountsList />
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
  transactions: state.transactions
})

export default connect(mapStateToProps)(Dashboard);
