import React, { Component } from 'react'
import Welcome from './components/Welcome'
import Dashboard from './components/Dashboard'
import { connect } from 'react-redux'
import './App.css'



class App extends Component {
  render() {
    // include logic here for determining whether the person is logged in or not, and then going either to the welcome component or somewhere else
    var screen = true ? <Welcome /> : <Dashboard />
    return (
      <div>
        {screen}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
  transactions: state.transactions
})

export default connect(mapStateToProps)(App);
