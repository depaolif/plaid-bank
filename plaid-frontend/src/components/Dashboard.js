import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'

class Dashboard extends Component {
  render() {
    return (
      <div id="dashboard">
        <Navbar />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
  transactions: state.transactions
})

export default connect(mapStateToProps)(Dashboard);
