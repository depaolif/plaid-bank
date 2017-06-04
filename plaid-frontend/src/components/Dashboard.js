import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import Accounts from './Accounts'

class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard">
        <Navbar />
        <Accounts />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
  transactions: state.transactions
})

export default connect(mapStateToProps)(Dashboard);
