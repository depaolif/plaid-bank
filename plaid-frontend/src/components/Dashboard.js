import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>hello hello welcome</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
  transactions: state.transactions
})

export default connect(mapStateToProps)(Dashboard);
